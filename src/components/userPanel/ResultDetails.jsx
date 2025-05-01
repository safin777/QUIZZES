const ResultDetails = ({ children }) => {
    return (
        <div className='flex flex-1 justify-center items-center p-8 h-full max-h-screen dark:bg-dark-secondary lg:w-1/2'>
            <div className='h-[calc(100vh-50px)] overflow-y-scroll '>
                <div className='px-4'>{children}</div>
            </div>
        </div>
    );
};

export default ResultDetails;