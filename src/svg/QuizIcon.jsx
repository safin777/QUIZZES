const QuizIcon = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-8 h-8'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z' />
            <path d='M12 12l4 -2.25l4 -2.25' />
            <path d='M12 12l0 9' />
            <path d='M12 12l-4 -2.25l-4 -2.25' />
            <path d='M20 12l-4 2v4.75' />
            <path d='M4 12l4 2l0 4.75' />
            <path d='M8 5.25l4 2.25l4 -2.25' />
        </svg>
    );
};

export default QuizIcon;