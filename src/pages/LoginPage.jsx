import SalyImg from "../assets/Saly-1.png";
import Logo from "../assets/logo.svg";
import LoginForm from "../auth/LoginForm";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* leftside elements */}
      <div className="relative flex-col justify-between hidden p-12 lg:flex lg:w-1/2 bg-primary">
        <div className="text-white">
          <img src={SalyImg} alt="Illustration" className="mx-auto" />

          <h2 className="mb-4 text-3xl font-bold">Sign in Now</h2>
          <p className="mb-4 text-xl">Boost Your Learning Capabilities</p>
          <p className="mb-8">
            Logging in unlocks your personal progress tracker, letting you
            evaluate your performance and see how you stack up against others.
            Whether you're preparing for exams, improving your knowledge, or
            simply having fun, there's no better way to sharpen your mind.
          </p>
        </div>
      </div>
      {/* Right side elements */}
      <div className="flex items-center justify-center w-full p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="flex items-center gap-2 mb-8 text-3xl font-bold">
            <span>Welcome to</span>
            <img src={Logo} className="h-7" />
          </h2>
          <h1 className="mb-8 text-5xl font-bold">Sign in</h1>

          <LoginForm/>

          <div className="text-center">
            <a href="#" className="text-primary">
              Forgot Password
            </a>
          </div>

          <div className="mt-8">
            <p className="text-center">
              No Account ?{" "}
              <Link to="/register" className="text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
