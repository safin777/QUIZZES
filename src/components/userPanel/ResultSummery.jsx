
import { useAuth } from "../../hooks/useAuth";
import useResult from "../../hooks/useResult";
import { Link } from "react-router-dom";
import ProgressReport from "../userPanel/ProgressReport"

const ResultSummery = ({ data, isInPerviewMode }) => {
    const { auth } = useAuth();
    const { myCorrectAnswers, myIncorrectAnswers, totalCorrectMarks } =
        useResult(data);
    return (
        <div className='max-h-screen flex-1 overflow-hidden lg:flex pt-[100px] lg:pt-0  bg-primary dark:bg-dark-primary  flex-col justify-center p-12 relative'>
            {auth?.user?.role === "admin" && (
                <div className='fixed top-20 p-2 text-gray-800 rounded dark:text-dark-textPrimary max-w-96 bg-yellow-600/40 text-pretty'>
                    <h1>
                        <span className='text-lg font-bold'>
                            {" "}
                            ℹ️ Information:
                        </span>{" "}
                        {"  "}You are in a <u>Test/Preview</u> mode.
                    </h1>
                    <h4 className='defination'>
                        You can test quiz by perticipating as real user but your
                        submittion will not store in database and your
                        leaderboard will not generate.
                    </h4>
                </div>
            )}

            <div>
                <div className='text-white dark:text-dark-textPrimary'>
                    <div>
                        <h2 className='mb-2 text-4xl font-bold'>
                            {data?.quiz?.title}
                        </h2>
                        <p>{data?.quiz?.description}</p>
                    </div>
                    <div className='flex flex-col items-center my-6 sm:flex-row'>
                        <div className='order-2 w-1/2 sm:order-1'>
                            <div className='flex gap-6 my-6'>
                                <div>
                                    <p className='my-0 text-2xl font-semibold'>
                                        {data?.quiz?.total_questions}
                                    </p>
                                    <p className='text-gray-300'>Questions</p>
                                </div>
                                {!isInPerviewMode && (
                                    <div>
                                        <p className='my-0 text-2xl font-semibold'>
                                            {myCorrectAnswers.length}
                                        </p>
                                        <p className='text-gray-300'>Correct</p>
                                    </div>
                                )}
                                {!isInPerviewMode && (
                                    <div>
                                        <p className='my-0 text-2xl font-semibold'>
                                            {myIncorrectAnswers.length}
                                        </p>
                                        <p className='text-gray-300'>Wrong</p>
                                    </div>
                                )}
                            </div>
                            <Link
                                to={`/leaderboard/${data?.quiz?.id}`}
                                className='py-3 text-lg font-medium text-white underline rounded-md transition-colors bg-secondary hover:bg-secondary/90'>
                                View Leaderboard
                            </Link>
                        </div>
                        {!isInPerviewMode && (
                            <ProgressReport
                                totalCorrectMarks={totalCorrectMarks}
                                totalMarks={data?.quiz?.total_marks}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResultSummery;