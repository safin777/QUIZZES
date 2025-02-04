import React from "react";
import LogoWhite from "../assets/logo-white.svg";
import Logo from '../assets/logo.svg'
import SalyImg from "../assets/Saly-1.png";
import { Link } from "react-router-dom";
import RegisterForm from "../auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex max-h-screen min-h-screen">
      {/* left side items */}
      <div className="fixed top-0 left-0 flex-col justify-between hidden h-full p-12 lg:flex lg:w-1/2 bg-primary">
        <div className="text-white">
          <img src={LogoWhite} className="h-8" />

          <img
            src={SalyImg}
            alt="Illustration"
            className="max-w-lg mx-auto 2xl:ml-0 max-h-64"
          />

          <h2 className="mb-1 text-3xl font-bold">Sign Up Now</h2>
          <p className="mb-4 text-xl font-medium">
            Boost Your Learning Capabilities
          </p>
          <p className="max-w-lg mb-8">
            Logging in unlocks your personal progress tracker, letting you
            evaluate your performance and see how you stack up against others.
            Whether you're preparing for exams, improving your knowledge, or
            simply having fun, there's no better way to sharpen your mind.
          </p>
        </div>
      </div>
      {/* Right Side items */}
      <div className="fixed top-0 right-0 flex items-start justify-center w-full h-full p-6 overflow-y-auto lg:w-1/2 xl:items-center lg:p-8 xl:p-12 xl:overflow-hidden">
        <div className="w-full max-w-lg ">
          <h2 className="flex items-center gap-2 mb-3 text-3xl font-bold">
            <span>Welcome to</span>
            <img src={Logo} className="h-7" />
          </h2>
          <h1 className="mb-6 text-4xl font-bold">Sign Up</h1>

          <RegisterForm/>

          <div className="mt-2 text-gray-400">
            <p className="text-center">
              Already have account ?{" "}
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
