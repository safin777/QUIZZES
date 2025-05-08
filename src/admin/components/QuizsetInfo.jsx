const QuizsetInfo = ({ quiz }) => {
    return (
        <>
            <div className='flex justify-between dark:text-dark-textPrimary'>
                <h2 className='mb-4 text-3xl font-bold'>{quiz?.title}</h2>
                {quiz?.status === "draft" && (
                    <h4 className='px-4 mr-12 h-6 text-white align-middle rounded-full status bg-gray-500/80'>
                        Draft
                    </h4>
                )}
                {quiz?.status === "published" && (
                    <h4 className='px-2 mr-12 h-6 text-white align-middle rounded-full status bg-green-500/80'>
                        Published
                    </h4>
                )}
            </div>
            <div className='inline-block px-2.5 py-0.5 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-full'>
                Total number of questions : {quiz?.Questions?.length}
            </div>
            <p className='mb-4 text-gray-600'>{quiz?.description}</p>
        </>
    );
};

export default QuizsetInfo;
