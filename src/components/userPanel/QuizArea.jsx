const QuizArea = ({ children }) => {
    return (
        <div className='bg-white lg:col-span-2 dark:bg-dark-secondary'>
            {children}
        </div>
    );
};

export default QuizArea;