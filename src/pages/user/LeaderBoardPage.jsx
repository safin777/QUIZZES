import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "motion/react";
import { easeIn } from "motion";
import { span } from "framer-motion/client";


import useResult from "../../hooks/useResult";
import PageTitle from "../../components/common/PageTitle";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import LeaderBoardPageSkeliton from "../../components/skeletons/LeaderBoardPageSkeliton";
import ErrorComponent from "../../components/common/ErrorComponent";
import LeaderBoard from "../../components/userPanel/LeaderBoard";
import SelfResultCard from "../../components/userPanel/SelfResultCard";
import TopFives from "../../components/userPanel/TopFives";
import ScoreLeader from "../../components/userPanel/ScoreLeader";

const LeaderBoardPage = () => {
    const location = useLocation();
    const quizsetId = location.pathname.split("/")[2];
    const { auth } = useAuth();
    const { getAttempts } = useUsersApiHandlers();
    const navigate = useNavigate();

    // attemps query with react query
    const { isLoading, data, error } = useQuery({
        queryFn: getAttempts,
        queryKey: ["leaderboard", quizsetId],
    });

    const {
        totalCorrectMarks,
        myIncorrectAnswers,
        myCorrectAnswers,
        leaderboard,
        topFiveRankHolders,
    } = useResult(data?.data && data?.data);

    const myPosition =
        leaderboard &&
        leaderboard.find((leader) => leader.userId === auth.user.id);
    const allAttempts = data && data?.data?.attempts;

    const isUserAttempts =
        allAttempts &&
        allAttempts.find((attempt) => attempt?.user?.id === auth?.user?.id);

    if (auth?.user?.role !== "admin") {
        !isUserAttempts && navigate(`/quizzes/${quizsetId}`);
    }

    return (
        <motion.main
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='min-h-[calc(100vh-140px)] flex items-center justify-center'>
            <PageTitle title='Quizzes - Leaderboard' />
            {isLoading ? (
                <LeaderBoardPageSkeliton />
            ) : error ? (
                <ErrorComponent />
            ) : (
                <LeaderBoard>
                    <SelfResultCard
                        user={auth.user}
                        myCorrectAnswers={myCorrectAnswers}
                        myIncorrectAnswers={myIncorrectAnswers}
                        totalCorrectMarks={totalCorrectMarks}
                        myPosition={myPosition}
                    />
                    <TopFives quiz={data?.data.quiz}>
                        {leaderboard && topFiveRankHolders.length === 0 ? (
                            <span className='text-xl text-red-500'>
                                No Perticipents for this Quiz
                            </span>
                        ) : (
                            topFiveRankHolders.map((leader) => (
                                <ScoreLeader
                                    key={leader.userId}
                                    highlight={
                                        leader.userId === auth.user.id &&
                                        leader.position <= 5
                                    }
                                    leader={leader}
                                />
                            ))
                        )}
                    </TopFives>
                </LeaderBoard>
            )}
        </motion.main>
    )

};
export default LeaderBoardPage;