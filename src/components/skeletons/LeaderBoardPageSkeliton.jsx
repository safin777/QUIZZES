const LeaderBoardPageSkeliton = () => {
    return (
        <div className='overflow-hidden w-full max-w-6xl bg-white rounded-lg shadow-lg dark:bg-dark-primary'>
            <div className='grid grid-cols-1 gap-8 p-6 md:p-8 md:grid-cols-2'>
                {/* Left Column Skeleton */}
                <div className='p-6 text-white rounded-lg bg-primary'>
                    <div className='flex flex-col items-center mb-6'>
                        <div className='mb-4 w-20 h-20 bg-gray-300 rounded-full border-4 border-white animate-pulse'></div>
                        <div className='mb-2 w-32 h-6 bg-gray-300 rounded animate-pulse'></div>
                        <div className='w-20 h-4 bg-gray-300 rounded animate-pulse'></div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                        <div className='text-center'>
                            <div className='mx-auto mb-2 w-12 h-4 bg-gray-300 rounded animate-pulse'></div>
                            <div className='mx-auto w-16 h-6 bg-gray-300 rounded animate-pulse'></div>
                        </div>
                        <div className='text-center'>
                            <div className='mx-auto mb-2 w-12 h-4 bg-gray-300 rounded animate-pulse'></div>
                            <div className='mx-auto w-16 h-6 bg-gray-300 rounded animate-pulse'></div>
                        </div>
                        <div className='text-center'>
                            <div className='mx-auto mb-2 w-12 h-4 bg-gray-300 rounded animate-pulse'></div>
                            <div className='mx-auto w-16 h-6 bg-gray-300 rounded animate-pulse'></div>
                        </div>
                    </div>
                </div>

                {/* Right Column Skeleton */}
                <div>
                    <div className='mb-4 w-48 h-6 bg-gray-300 rounded animate-pulse'></div>
                    <div className='mb-6 w-32 h-4 bg-gray-300 rounded animate-pulse'></div>
                    <ul className='space-y-4'>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <li
                                    key={index}
                                    className='flex justify-between items-center space-x-4'>
                                    <div className='flex items-center'>
                                        <div className='mr-4 w-10 h-10 bg-gray-300 rounded-full animate-pulse'></div>
                                        <div>
                                            <div className='mb-2 w-24 h-4 bg-gray-300 rounded animate-pulse'></div>
                                            <div className='w-16 h-3 bg-gray-300 rounded animate-pulse'></div>
                                        </div>
                                    </div>
                                    <div className='w-10 h-4 bg-gray-300 rounded animate-pulse'></div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardPageSkeliton;
