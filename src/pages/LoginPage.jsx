import { Link, Navigate } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import LoginPageInfo from "./auth/LoginPageInfo";
import LoginForm from "../auth/LoginForm";
import Logo from "../components/userPanel/Logo";
import { useAuth } from "../hooks/useAuth";
const LoginPage = () => {

  const { auth } = useAuth();
  if (auth.accessToken) {
    return <Navigate to='/' />
  }

  return (
    <div className='overflow-hidden text-gray-800 bg-white dark:bg-dark-primary dark:text-dark-textPrimary'>
      <PageTitle title='Quizzes - Login' />
      <div className='flex min-h-screen'>
        <LoginPageInfo />

        <div className='flex justify-center items-center p-12 w-full lg:w-1/2'>
          <div className='w-full max-w-md'>
            <h2 className='flex gap-2 items-center mb-8 text-3xl font-bold'>
              <span>Welcome to</span>
              <Logo />
            </h2>
            <h1 className='mb-8 text-5xl font-bold'>Sign in</h1>
            <LoginForm />
            <div className='text-center'>
              <a
                href='#'
                className='text-primary dark:text-dark-textSecondary'>
                Forgot Password
              </a>
            </div>
            <div className='mt-8'>
              <p className='text-center'>
                No Account ?{" "}
                <Link
                  to='/register'
                  className='text-primary dark:text-dark-textSecondary'>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
