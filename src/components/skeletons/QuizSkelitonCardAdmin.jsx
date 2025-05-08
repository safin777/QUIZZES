const SkeletonLoader = () => {
    return (
        <div className='animate-pulse dark:bg-dark-secondary'>
            <div className='p-4 w-72 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-dark-primary group'>
                <div className='mb-4 w-8 h-8 bg-gray-300 rounded dark:bg-gray-800'></div>
                <div className='mb-2 w-3/4 h-6 bg-gray-300 rounded dark:bg-gray-800'></div>
                <div className='mb-2 w-full h-4 bg-gray-300 rounded dark:bg-gray-800'></div>
                <div className='w-5/6 h-4 bg-gray-300 rounded dark:bg-gray-800'></div>
            </div>
        </div>
    );
};

const QuizSkelitonCardAdmin = () => {
    return (
        <div className='flex gap-6'>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
        </div>
    );
};

export default QuizSkelitonCardAdmin;