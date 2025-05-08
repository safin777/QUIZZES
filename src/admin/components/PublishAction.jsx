import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";

const PublishAction = ({ status, quiz }) => {
    const { updateQuizSet } = useAdminApiHandlers();
    const queryClient = useQueryClient();

    // handle update mutation
    const { mutate } = useMutation({
        mutationFn: ({ quizSetId, data }) => updateQuizSet(quizSetId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
        },
    });

    // handle publish actions
    function handlePublishAction(type) {
        if (type === "published") {
            const takeConfirmation = confirm(
                "Are you sure ? you are going to publish this quiz."
            );
            if (takeConfirmation) {
                const quizSetId = quiz?.id;
                const data = {
                    status: "published",
                };
                mutate({ quizSetId, data });
            }
        } else if (type === "draft") {
            const takeConfirmation = confirm(
                "Are you sure, you are going to Unpublish this quiz ? Unpublishing a published quiz may effects in your users Experiences."
            );
            if (takeConfirmation) {
                const quizSetId = quiz?.id;
                const data = {
                    status: "draft",
                };
                mutate({ quizSetId, data });
            }
        }
    }

    return (
        <div className='flex fixed top-4 right-12 justify-between items-center mb-2'>
            <div className='button'>
                {quiz?.Questions.length > 0 && (
                    <>
                        {status === "draft" && (
                            <button
                                onClick={() => handlePublishAction("published")}
                                className='px-6 py-2 text-white rounded-full ring-2 ring-transparent ring-offset-2 duration-200 bg-primary hover:bg-indigo-900 hover:ring-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
                                Publish Now
                            </button>
                        )}
                        {status === "published" && (
                            <button
                                onClick={() => handlePublishAction("draft")}
                                className='px-6 py-2 text-white rounded-full ring-2 ring-transparent ring-offset-2 duration-200 bg-primary hover:bg-indigo-900 hover:ring-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
                                Unpublish
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
export default PublishAction;