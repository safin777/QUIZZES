import { useAuth } from "../hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import RegistrationPageInfo from "./auth/RegistrationPageInfo";
import Logo from "../components/userPanel/Logo";
import RegisterForm from "../auth/RegisterForm";

const RegisterPage = () => {
  const { auth } = useAuth();
  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className='text-gray-800 bg-white dark:bg-dark-secondary dark:text-dark-textPrimary'>
      <div className='flex min-h-screen max-h-screen'>
        <RegistrationPageInfo />
        <div className='flex overflow-y-auto fixed top-0 right-0 justify-center items-start p-6 w-full h-full lg:w-1/2 xl:items-center lg:p-8 xl:p-12 xl:overflow-hidden'>
          <div className='w-full max-w-lg'>
            <h2 className='flex gap-2 items-center mb-3 text-3xl font-bold'>
              <span>Welcome to</span>
              <Logo />
            </h2>
            <h1 className='mb-6 text-4xl font-bold'>Sign Up</h1>
            <RegisterForm/>
            <div className='mt-2 text-gray-400'>
              <p className='text-center'>
                Already have account ?{" "}
                <Link
                  to='/login'
                  className='text-primary dark:text-dark-textSecondary'>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterPage;
