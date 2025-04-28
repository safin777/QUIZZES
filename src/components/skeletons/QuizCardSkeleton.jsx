const QuizCardSkeleton = () => {
    return (
        <main className='p-6 h-full bg-white rounded-md dark:bg-dark-secondary dark:text-dark-textPrimary'>
            <section>
                {/* Skeleton Cards */}
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                    {[1, 2, 3, 4].map((key) => (
                        <div
                            key={key}
                            className='rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative animate-pulse   bg-gray-100 dark:bg-dark-primary'>
                            <div className='w-full h-[200px]  dark:bg-gray-800  bg-gray-300 rounded-t-lg'></div>
                            <div className=''>
                                <div className='mt-3 mb-2 h-6 bg-gray-300 rounded dark:bg-gray-800'></div>
                                <div className='mb-4 h-4 bg-gray-300 rounded dark:bg-gray-800'></div>
                                <div className='h-12 bg-gray-300 rounded dark:bg-gray-800'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default QuizCardSkeleton;
