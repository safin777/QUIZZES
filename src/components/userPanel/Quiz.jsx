import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import { createPortal } from "react-dom";
import { useMutation } from "@tanstack/react-query";
import { shuffleArray } from "../../utils/index";
import ConfirmationPopup from "../../components/common/ConfirmationPopup";
import Alert from "../../components/common/Alert";
import { ArrowLeft, ArrowRight, Save } from "react-feather";
const Quiz = ({ quiz, answers, setAnswers }) => {
    const { auth } = useAuth();
    const [alert, setAlert] = useState({
        status: false,
        text: "",
    });
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [showingIndex, setShowingIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const currentQuestion = quiz && quiz?.questions[showingIndex];
    const totalAnswer = Object.keys(answers).length;
    const navigate = useNavigate();

    const { submitQuizAnswer } = useUsersApiHandlers();

    // mutation to submit quiz
    const { mutate } = useMutation({
        mutationFn: ({ answers, quizId }) => submitQuizAnswer(answers, quizId),
        onSuccess: () => {
            navigate(`/result/${quiz.id}`);
        }
    });

    const onConfirm = () => {

        if (auth?.user?.role === "admin") {
            navigate(`/result/${quiz?.id}`, {
                state: { ...answers },
            });
        } else {
            setShowPopup(false);
            mutate({ answers, quizId: quiz?.id });
        }
    }

    // handle submittion cancel
    const onCancel = () => {
        setShowPopup(false);
    }

    const barWidth = ((showingIndex + 1) / quiz?.questions?.length) * 100;

    useEffect(() => {
        // Shuffle options only when the component mounts
        setShuffledOptions(shuffleArray(currentQuestion?.options));
    }, [currentQuestion?.options]);

    return (
        <div className='bg-white dark:text-dark-textPrimary dark:bg-dark-secondary p-6 !pb-2 rounded-md'>
            {showPopup &&
                createPortal(
                    <ConfirmationPopup
                        onConfirm={onConfirm}
                        onCancel={onCancel}>
                        <h4 className='w-96'>
                            <span className='text-xl font-bold'>
                                ⚠️ Warning
                            </span>{" "}
                            <br />
                            Are you sure you want to submit the quiz? you
                            answered{" "}
                            <span className='font-semibold'>
                                {totalAnswer}
                            </span>{" "}
                            questions out of{" "}
                            <span className='font-semibold'>
                                {quiz?.questions.length}
                            </span>{" "}
                            questions. Once you submitted the quiz, you will not
                            be able to re-submit.
                            <br />
                            <span className='mt-5 font-bold'>
                                Are you sure to do that ?
                            </span>
                        </h4>
                    </ConfirmationPopup>,
                    document.body
                )
            }
            {/* question progress bar */}

            <div className='ques-progress-bar'>
                <div
                    className='w-0 h-3 rounded-md transition-transform outline-none progress-bar duration-400 bg-primary'
                    style={{ width: `${barWidth}%` }}></div>
                <span>
                    Showing Question {showingIndex + 1} of{" "}
                    {quiz?.questions?.length}
                </span>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-2xl font-semibold'>
                    {showingIndex + 1}. {currentQuestion?.question}
                </h3>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                {currentQuestion?.options &&
                    shuffledOptions.map((option, index) => (
                        <label
                            key={index}
                            className='flex items-center px-4 py-3 space-x-3 text-lg rounded-md cursor-pointer bg-primary/5 dark:bg-dark-primary'>
                            <input
                                onChange={(e) => {
                                    setAnswers((prevAnswers) => {
                                        // If checked, add the answer; if unchecked, remove it
                                        if (e.target.checked) {
                                            return {
                                                ...prevAnswers,
                                                [currentQuestion?.id]: option,
                                            };
                                        } else {
                                            // Remove the answer when unchecked
                                            const updatedData = { ...answers };
                                            delete updatedData[
                                                currentQuestion.id
                                            ];
                                            return updatedData;
                                        }
                                    });
                                }}
                                type='checkbox'
                                name={currentQuestion?.id}
                                className='form-radio text-buzzr-purple'
                                checked={answers[currentQuestion.id] === option}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
            </div>
            <p className='mt-5 text-sm text-gray-500'>
                ℹ️ Only one correct option, if you select more than one, it will
                be counted as wrong.
            </p>

            {alert.status && <Alert text={alert.text} setState={setAlert} />}

            <div className='flex items-center mt-8 w-full'>
                {/*  Previous button to navigate previous Quiz */}
                {showingIndex > 0 && (
                    <button
                        onClick={() => {
                            setShowingIndex(showingIndex - 1);
                        }}
                        disabled={showingIndex === 0}
                        className='flex gap-2 pagination-button'>
                        <ArrowLeft /> Previous
                    </button>
                )}

                <div className='flex ml-auto'>
                    {/*  Next button to navigate Next Quiz */}
                    {showingIndex + 1 < quiz?.questions?.length && (
                        <button
                            /*   Although it should have feature like skip any question if user not know the answer of particuler question for better UX, but I follow the assignement and requirement and Instruction from LWS-SUPPORT regarding this issue */

                            onClick={() => {
                                if (
                                    currentQuestion.id in answers &&
                                    answers[currentQuestion.id] !== ""
                                ) {
                                    setShowingIndex(showingIndex + 1);
                                } else {
                                    setAlert({
                                        status: true,
                                        text: "You have to answer this question before go to next question ",
                                    });
                                }
                            }}
                            disabled={
                                showingIndex + 1 === quiz?.questions?.length
                            }
                            className='pagination-button flex gap-2 w-[100px]'>
                            Next <ArrowRight />
                        </button>
                    )}

                    {/*  submit button to Submit all answers */}
                    {showingIndex + 1 === quiz?.questions?.length && (
                        <button
                            /*   Although it should have feature like submit quiz if user skip any question for better UX, but I follow the assignement and requirement and Instruction from LWS-SUPPORT regarding this issue */
                            onClick={() => {
                                if (
                                    currentQuestion.id in answers &&
                                    answers[currentQuestion.id] !== ""
                                ) {
                                    setShowPopup(true);
                                } else {
                                    setAlert({
                                        status: true,
                                        text: "You have to answer all the questions before submit",
                                    });
                                }
                            }}
                            className='pagination-button flex gap-2 w-[140px]'>
                            <Save /> Submit
                        </button>
                    )}
                </div>
            </div>

        </div>
    )


};

export default Quiz;