import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "motion/react";
import { easeIn } from "motion";

import BreadCrumbs from "../../admin/components/BreadCrumbs";
import NoData from "../../components/common/NoData";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import ErrorComponent from "../../components/common/ErrorComponent";
import QuizSetEntryPageSkeliton from '../../components/skeletons/QuizSetEntryPageSkeliton';
import QuizsetInfo from "../../admin/components/QuizsetInfo";
import QuizForm from "../../admin/forms/QuizForm";
import PublishAction from "../../admin/components/PublishAction";
import QuizEntryList from "../../admin/components/QuizEntryList"
import {getSortedByUpdatedAt} from '../../utils/index';
import QuizEntry from "../../admin/components/QuizEntry";



const QuizEntryPage = () => {
    const { pathname } = useLocation();
    const quizsetId = pathname.split("/")[4];
    const { getAllQuizSet } = useAdminApiHandlers();
    const [dataToEdit, setDataToEdit] = useState(null);

    //get all quize sets
    const { isLoading, data, error } = useQuery({
        queryFn: getAllQuizSet,
        queryKey: ["admin", "quizzes"],
    });

    const thisQuizData = data && data?.find((quiz) => quiz.id === quizsetId);

    function handleDataToEdit(data) {
        setDataToEdit(data);
    }

    return isLoading ? (
        <QuizSetEntryPageSkeliton />
    ) : error ? (
        <ErrorComponent />
    ) : (
        <main className='px-4 py-8 md:flex-grow sm:px-6 lg:px-8'>
            <div>
                <BreadCrumbs />
                <div className='grid grid-cols-1 dark:text-dark-textPrimary lg:grid-cols-2 md:gap-8 lg:gap-12'>
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            y: [-10, 0],
                            transition: { duration: 0.3, ease: easeIn },
                        }}
                        className=''>

                        <QuizsetInfo quiz={thisQuizData} />

                        <div className='mb-12 space-y-4'>
                            {!dataToEdit &&
                                thisQuizData?.status === "published" ? (
                                <div className='flex flex-col justify-center items-center p-4 mb-4 h-[300px] gap-3 text-gray-800 dark:bg-dark-secondary dark:text-dark-textPrimary bg-gray-200  rounded-lg'>
                                    <h2 className='text-2xl'>
                                        {" "}
                                        Published Quiz
                                    </h2>
                                    <span className='text-lg font-normal dark:text-dark-textSecondary text-pretty'>
                                        You Can not add question to a already
                                        published Quiz. If you really want to do
                                        this, you need to unpublish the quiz
                                        first.
                                    </span>
                                </div>
                            ) : (
                                <QuizForm
                                    quiz={thisQuizData}
                                    initialData={dataToEdit}
                                    setDataToEdit={setDataToEdit}
                                />
                            )}
                        </div>
                    </motion.div>
                    <PublishAction
                        status={thisQuizData?.status}
                        quiz={thisQuizData}
                    />
                    <QuizEntryList>
                        {thisQuizData?.Questions &&
                            thisQuizData?.Questions.length > 0 ? (
                            getSortedByUpdatedAt(thisQuizData.Questions).map(
                                (question, index) => (
                                    <QuizEntry
                                        quizSet={thisQuizData}
                                        key={question.id}
                                        index={index}
                                        question={question}
                                        handleDataToEdit={handleDataToEdit}
                                    />
                                )
                            )
                        ) : (
                            <div className='flex place-content-center'>
                                <NoData
                                    text={`You don't have added ant question yet.`}
                                />
                            </div>
                        )}
                    </QuizEntryList>
                </div>
            </div>
        </main>
    )

}
export default QuizEntryPage;