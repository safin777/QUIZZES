import { useAuth } from "../../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { easeIn } from "motion";
import PageTitle from "../../components/common/PageTitle";
import QuizCardSkeleton from "../../components/skeletons/QuizCardSkeleton";
import ErrorComponent from "../../components/common/ErrorComponent";
import QuizsetDetails from "../../components/userPanel/QuizsetDetails";
import QuizArea from "../../components/userPanel/QuizArea";
import Quiz from "../../components/userPanel/Quiz";

const QuizPage = () => {

    const { auth } = useAuth();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const quizsetId = pathname.split("/")[2];
    const [answers, setAnswers] = useState({});
    const { getQuizById } = useUsersApiHandlers();

    const { isLoading, data, error } = useQuery({
        queryFn: getQuizById,
        queryKey: ["quizzes", quizsetId],
    });

    const isAttempted = data?.data?.user_attempt?.attempted;
    if (auth?.user?.role !== 'admin') {
        isAttempted && navigate(`/result/${quizsetId}`);
    }

    return (
        <motion.main
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: {
                    duration: 0.3,
                    ease: easeIn,
                }
            }}
            className='max-w-8xl mx-auto lg:h-[calc(100vh-10rem)]'>
            <PageTitle title='Quizzes - Quiz' />

            {isLoading ? (
                <QuizCardSkeleton />
            ) : error ? (
                <ErrorComponent />
            ) : (
                <div className='grid grid-cols-1 gap-10 h-full lg:grid-cols-3'>
                    <QuizsetDetails answers={answers} quizset={data?.data} />
                    <QuizArea>
                        <Quiz answers={answers} setAnswers={setAnswers} quiz={data?.data} />
                    </QuizArea>
                </div>
            )
            }

        </motion.main>
    )


}

export default QuizPage