const QuizSetEntryPageSkeliton = () => {
    return (
        <main className='px-4 py-8 md:flex-grow sm:px-6 dark:bg-dark-primary lg:px-8'>
            <div>
                {/* Breadcrumb */}
                <div className='mb-4 text-sm'>
                    <div className='w-24 h-4 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                    <div className='mt-2 w-16 h-4 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12'>
                    {/* Left Column */}
                    <div>
                        <div className='mb-4 w-48 h-8 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                        <div className='mb-4 w-64 h-6 bg-gray-200 rounded-md dark:bg-gray-700'></div>
                        <div className='mb-4 w-80 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></div>

                        <div className='space-y-4'>
                            <div className='mb-4 w-40 h-6 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                            <div className='w-full h-10 bg-gray-200 rounded-md dark:bg-gray-700'></div>
                            <div className='mt-4 w-20 h-6 bg-gray-200 rounded-md dark:bg-gray-700'></div>

                            {[1, 2, 3, 4].map((_, index) => (
                                <div
                                    key={index}
                                    className='flex items-center px-4 py-2 space-x-2 bg-gray-200 rounded-md animate-pulse dark:bg-gray-700'>
                                    <div className='w-4 h-4 bg-gray-300 rounded-full dark:bg-gray-800'></div>
                                    <div className='w-full h-4 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                                </div>
                            ))}

                            <div className='mt-4 w-full h-10 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-6'>
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className='overflow-hidden bg-white rounded-lg shadow-sm animate-pulse'>
                                <div className='p-6 bg-gray-200 dark:bg-gray-700'>
                                    <div className='mb-4 w-80 h-6 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                                    <div className='space-y-2'>
                                        {[1, 2, 3, 4].map((_, idx) => (
                                            <div
                                                key={idx}
                                                className='flex items-center space-x-3'>
                                                <div className='w-4 h-4 bg-gray-300 rounded-full dark:bg-gray-800'></div>
                                                <div className='w-40 h-4 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex px-6 py-2 space-x-4 bg-gray-100 dark:bg-gray-600'>
                                    <div className='w-20 h-6 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                                    <div className='w-24 h-6 bg-gray-300 rounded-md dark:bg-gray-800'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default QuizSetEntryPageSkeliton;
