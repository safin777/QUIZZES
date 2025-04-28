import authIllustration from "../../assets/Saly-1.png";
const LoginPageInfo = () => {
    return (
        <div className='hidden relative flex-col justify-between p-12  dark:bg-dark-secondary lg:flex lg:w-1/2 bg-primary'>
            <div className='text-white'>
                <img
                    src={authIllustration}
                    alt='Illustration'
                    className='mx-auto'
                />
                <h2 className='mb-4 text-3xl font-bold'>Sign in Now</h2>
                <p className='mb-4 text-xl'>Boost Your Learning Capabilities</p>
                <p className='mb-8'>
                    Logging in unlocks your personal progress tracker, letting
                    you evaluate your performance and see how you stack up
                    against others. Whether you{"'"}re preparing for exams,
                    improving your knowledge, or simply having fun, there{"'"}s
                    no better way to sharpen your mind.
                </p>
            </div>
        </div>
    );
};

export default LoginPageInfo;