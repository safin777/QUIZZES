import Field from "../components/common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { tokens, user } = response.data.data;
        if (tokens) {
          const authToken = tokens.accessToken;
          const refreshToken = tokens.refreshToken;
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with Email ${formData.email} is not found`,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          <Field
            label="Enter your username or email address"
            htmlFor="email"
            error={errors.email}
            classNameFor="block mb-2"
          >
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 border  rounded-lg ${
                errors.emmail ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Username or email address"
              {...register("email", { required: "Email ID is required" })}
            />
          </Field>
        </div>

        <div className="mb-6">
          <Field
            label="Enter your Password"
            htmlFor="password"
            error={errors.password}
            classNameFor="block mb-2"
          >
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-3 border  rounded-lg ${
                errors.password ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
            />
          </Field>
        </div>

        <p>{errors?.root?.random?.message}</p>

        <div className="gap-2 mb-6 ">
          <Field
            htmlFor="admin"
            error="error"
            label="Login as Admin"
            classNameFor="block"
          >
            <input
              type="checkbox"
              id="admin"
              className="px-4 py-3 border border-gray-300 rounded-lg"
            />
          </Field>
        </div>
        <button
          type="submit"
          className="w-full py-3 mb-4 text-white rounded-lg bg-primary"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
