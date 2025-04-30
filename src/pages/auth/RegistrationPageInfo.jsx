import authIllustration from "../../assets/Saly-1.png";
import whiteLogo from "../../assets/logo-white.svg";
const RegistrationPageInfo = () => {
    return (
        <div className='hidden fixed top-0 left-0 flex-col justify-center p-12 h-full dark:bg-dark-primary dark:text-dark-textPrimary lg:flex lg:w-1/2 bg-primary'>
            <div className='text-white'>
                <img src={whiteLogo} className='h-8' />
                <img
                    src={authIllustration}
                    alt='Illustration'
                    className='mx-auto max-w-lg max-h-64 2xl:ml-0'
                />
                <h2 className='mb-1 text-3xl font-bold'>Sign Up Now</h2>
                <p className='mb-4 text-xl font-medium'>
                    Boost Your Learning Capabilities
                </p>
                <p className='mb-8 max-w-lg'>
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

export default RegistrationPageInfo;

