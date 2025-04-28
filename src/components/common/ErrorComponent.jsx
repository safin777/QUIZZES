const ErrorComponent = ({ message }) => {
    return (
        <div className='flex flex-col w-full items-center justify-center h-[500px] dark:bg-dark-primary dark:text-dark-textPrimary bg-gray-200 text-red-800 rounded'>
            <h1 className='mb-4 text-4xl font-bold'>
                Oops! Something went wrong
            </h1>
            <p className='text-lg'>
                {message ||
                    "An unexpected error occurred. Please try again later."}
            </p>
            <button
                className='px-4 py-2 mt-6 text-white bg-red-600 rounded transition hover:bg-red-700'
                onClick={() => window.location.reload()}>
                Refresh Page
            </button>
        </div>
    );
};

export default ErrorComponent;
