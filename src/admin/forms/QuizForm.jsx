import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import Field from "../../components/common/Field";
import cn from "../../utils/cn";
import Alert from "../../components/common/Alert";


const QuizForm = ({ initialData, setDataToEdit }) => {
    const { pathname } = useLocation();
    const quizId = pathname.split("/")[4];
    const queryClient = useQueryClient();
    const isEditMode = initialData && initialData.question ? true : false;
    const editableQuestionId = initialData?.id;

    const {
        control,
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
        setError,
    } = useForm({
        defaultValues: {
            question: initialData?.question || "",
            options: initialData?.options || [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
            ],
            correctAnswer: initialData?.correctAnswer || null,

        }
    })
    // for manage dynamic field add and remove
    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",
    });

    const correctAnswer = watch("correctAnswer"); // watch correct answer value
    const options = watch("options"); // watch options values

    // use add mutation with with react hook form
    const { addQuestion, updateQuestion } = useAdminApiHandlers();

    // Question add mutation
    const { mutate } = useMutation({
        mutationFn: ({ quizId, data }) => addQuestion(quizId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
            toast.success("Question Added to the list", {
                position: "bottom-right",
            });
            reset();

        },
        onError: (error) => {
            setError("root", {
                type: "random",
                message:
                    "Something went wrong!. Please check your internet connection or try again later",
            });
        }
    })

    // handle Edit Quiz/ patch or update data with mutation
    const mutation = useMutation({
        mutationFn: ({ editableQuestionId, data }) => updateQuestion(editableQuestionId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
            reset();
            setDataToEdit(null);
        },
        onError: (error) => {
            console.log(error);
        },
    })

    // handle form submit
    const handleFormSubmit = (data) => {
        if (!data.correctAnswer) {
            alert("Please select a correct answer!");
            return;
        }
        if (!isEditMode) {
            mutate({ quizId, data });
        } else {
            mutation.mutate({ editableQuestionId, data });
        }
    };

    // reset the previous data and update the react form state default data when the form in edit mode
    useEffect(() => {
        if (initialData) {
            reset({
                question: initialData.question || "",
                options: initialData.options || [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4",
                ],
                correctAnswer: initialData.correctAnswer || null,
            });
        }
    }, [initialData, reset]);

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-4'>
            <h2 className='text-xl font-bold text-foreground'>
                {isEditMode ? "Update Quiz" : "Create Quiz"}
            </h2>

            <Field
                label='Question Title'
                htmlFor='question'
                labelClass='block text-sm font-medium text-foreground mb-1'
                error={errors.question}>
                <input
                    type='text'
                    id='question'
                    {...register("question", {
                        required: "Quiz title is required",
                        minLength: {
                            value: 5,
                            message:
                                "Quiz title should have atleast 5 characters",
                        },
                    })}
                    className={cn(
                        `dark:text-dark-textPrimary dark:bg-dark-secondary w-full mt-2 p-2 border border-input rounded-md bg-background text-foreground`,
                        errors.question &&
                        "border-red-500 focus:outline-red-500"
                    )}
                    placeholder='Enter question title'
                />
            </Field>

            {/* Options */}
            <p className='mt-4 text-sm text-gray-600 dark:text-dark-textPrimary'>
                {isEditMode ? "Edit option's text" : "Add Options"}
            </p>
            {isEditMode && (
                <span className='text-sm text-red-500'>
                    You can&apos;t change the correct option, but you can change
                    the spelling mistake.{" "}
                </span>
            )}

            <div id='optionsContainer' className='mt-4 space-y-2'>
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className='flex items-center px-4 py-1 space-x-2 bg-white rounded-md dark:text-dark-textPrimary dark:bg-dark-secondary group focus-within:ring focus-within:ring-primary/80'>
                        {/* Correct Answer Checkbox */}
                        <input
                            type='checkbox'
                            className='w-4 h-4 text-primary dark:text-dark-textPrimary dark:bg-dark-secondary focus:ring-0'
                            checked={correctAnswer === options[index]}
                            onChange={() =>
                                setValue("correctAnswer", options[index])
                            }
                            disabled={isEditMode}
                        />

                        {/* Option Text */}
                        <input
                            {...register(`options.${index}`)}
                            defaultValue={field.value || ""}
                            className='p-2 w-full bg-transparent rounded-md outline-none dark:text-dark-textPrimary dark:bg-dark-secondary text-foreground focus:ring-0'
                            placeholder={`Option ${index + 1}`}
                            onChange={(e) => {
                                if (correctAnswer === options[index]) {
                                    setValue("correctAnswer", e.target.value); // Update correctAnswer if the option changes
                                }
                            }}
                        />

                        {/* Remove Option */}
                        {fields.length > 1 && (
                            <button
                                type='button'
                                onClick={() => {
                                    if (correctAnswer === options[index]) {
                                        setValue("correctAnswer", null); // Reset correctAnswer if field removed
                                    }
                                    remove(index);
                                }}
                                className='text-red-500 hover:text-red-700'>
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Add Option Button */}
            <button
                type='button'
                onClick={() => {
                    append("New Option"); // Append a new option string
                }}
                className='mt-2 text-primary dark:text-dark-textPrimary hover:underline'>
                Add Option
            </button>

            {errors?.root && <Alert text={errors?.root?.message} />}

            {/* Submit Button */}
            <div className='flex gap-12'>
                {isEditMode && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setDataToEdit(null);
                            return false;
                        }}
                        className='p-2 w-full text-center text-white bg-red-500 rounded-md transition-colors cursor-pointer text-primary-foreground hover:bg-red-400'>
                        Cancel
                    </div>
                )}

                <button
                    type='submit'
                    className='p-2 w-full text-white rounded-md transition-colors bg-primary text-primary-foreground hover:bg-primary/90'>
                    {isEditMode ? "Update Quiz" : "Save Quiz"}
                </button>
            </div>

        </form>
    )

}
export default QuizForm