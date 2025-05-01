import UserProfileDisplayer from "../common/UserProfileDisplayer";
const QuizsetDetails = ({ quizset, answers }) => {
    const totalAnswers = Object.keys(answers).length;
    return (
        <div className='flex flex-col p-6 h-full bg-white rounded-md lg:col-span-1 dark:bg-dark-secondary'>
            <div>
                <h2 className='mb-4 text-4xl font-bold dark:text-dark-textPrimary'>
                    {quizset?.title}
                </h2>

                <p className='mb-4 text-gray-600 dark:text-dark-textPrimary'>
                    {quizset?.description}
                </p>
                <div className='flex flex-col'>
                    <div className='inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-green-800 bg-green-100 rounded-full w-fit'>
                        Total number of questions :{" "}
                        {quizset?.stats.total_questions}
                    </div>
                    <div className='inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full w-fit'>
                        Participation : {totalAnswers}
                    </div>
                    <div className='inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-green-800 bg-gray-100 rounded-full w-fit'>
                        Remaining :
                        {quizset?.stats.total_questions - totalAnswers}
                    </div>
                </div>
            </div>
            <UserProfileDisplayer textColor='text-primary' />
        </div>
    )
}

export default QuizsetDetails;