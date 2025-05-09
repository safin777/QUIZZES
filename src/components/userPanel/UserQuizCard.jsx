import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import useResult from "../../hooks/useResult";
import { getImgURL } from "../../utils";


const bgImage = [1, 2, 3, 4, 5, 6, 7, 8];

const UserQuizCard = ({ quizSet }) => {
    const { auth } = useAuth();

    const [image] = useState(
        bgImage[Math.floor(Math.random() * bgImage.length)]
    );
    // handle quiz click
    const { getAttempts } = useUsersApiHandlers();
    // query to get attempts result
    const { data } = useQuery({
        queryKey: ["quizzes", quizSet.id, "attempts"],
        queryFn: getAttempts,
        enabled: !!auth?.user,
    })

    //check that user already attemted this quiz or not
    const allAttempts = data?.data?.attempts;
    const isAttempted = allAttempts?.find(attempted => attempted?.user?.id === auth?.user?.id);

    //get users result on this quiz
    const { totalCorrectMarks } = useResult(data?.data);
    return (
        <div className=' rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer '>
            <div className='absolute top-1/2 px-4 text-center text-white transition-all -translate-y-1/2'>
                <h1 className='text-5xl' style={{ fontFamily: "Jaro" }}>
                    {quizSet?.title}
                </h1>
                <p className='mt-2 text-lg'>{quizSet?.description}</p>
            </div>

            {!auth.accessToken ? (
                <Link to='/login'>
                    <div className='hidden absolute top-0 left-0 place-items-center w-full h-full text-white transition-all bg-black/80 group-hover:grid'>
                        <div>
                            <h3 className='text-xl'>
                                Total Questions: {quizSet?.total_questions}
                            </h3>

                            <h1 className='text-3xl font-bold'>
                                Sign in To Take Quiz
                            </h1>
                        </div>
                    </div>
                </Link>
            ) : auth?.user?.role === "admin" ? (
                <div className='hidden absolute top-0 left-0 place-items-center w-full h-full text-white transition-all bg-black/80 group-hover:grid'>
                    <div>
                        <h1 className='text-3xl font-bold'>Preview</h1>
                        <h3 className='text-xl'>
                            Total Questions: {quizSet?.total_questions}
                        </h3>
                        <h3 className='mb-4 text-xl'>
                            Total Marks: {data?.data?.quiz?.total_marks}
                        </h3>
                        <Link
                            to={`/quizzes/${quizSet.id}`}
                            className='rounded'>
                            <h4 className='text-lg font-bold underline cursor-pointer underline-offset-2 hover:text-dark-textSecondary'>
                                See the quiestions
                            </h4>
                        </Link>
                        <br />
                        <Link
                            to={`/leaderboard/${quizSet.id}`}
                            className='rounded'>
                            <h4 className='text-lg font-bold underline cursor-pointer underline-offset-2 hover:text-dark-textSecondary'>
                                See the leaderboard
                            </h4>
                        </Link>
                    </div>
                </div>
            ) : auth?.user && isAttempted ? (
                <Link to={`/result/${quizSet.id}`}>
                    <div className='hidden absolute top-0 left-0 place-items-center w-full h-full text-white transition-all bg-black/80 group-hover:grid'>
                        <div>
                            <h1 className='text-3xl font-bold'>
                                Already Participated
                            </h1>
                            <h3 className='text-xl'>
                                Total Questions: {quizSet?.total_questions}
                            </h3>
                            <h3 className='text-xl'>
                                Total Marks: {data?.data?.quiz?.total_marks}
                            </h3>

                            <p className='text-xl text'>
                                You got {totalCorrectMarks && totalCorrectMarks}{" "}
                                out of {data?.data?.quiz?.total_marks}
                            </p>
                            <Link
                                to={`/result/${quizSet.id}`}
                                className='text-xl'>
                                Click to view result
                            </Link>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link to={`/quizzes/${quizSet.id}`}>
                    <div className='hidden absolute top-0 left-0 place-items-center w-full h-full text-white transition-all bg-black/80 group-hover:grid'>
                        <div>
                            <h3 className='text-xl'>
                                Total Questions: {quizSet?.total_questions}
                            </h3>
                            <h3 className='text-xl'>
                                Total Marks: {data?.data?.quiz?.total_marks}
                            </h3>
                            <h1 className='text-3xl font-bold'>
                                Ready To Take Quiz
                            </h1>
                        </div>
                    </div>
                </Link>
            )}
            <img
                src={getImgURL(`${image}.jpg`)}
                alt='JavaScript Hoisting'
                className='object-cover mb-4 w-full h-full rounded'
            />
        </div>
    )

}


export default UserQuizCard;