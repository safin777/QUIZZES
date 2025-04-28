import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import InputField from "../components/common/InputField";
import { useMutation } from "@tanstack/react-query";
import { login } from '../apis/authentication';
import cn from "../utils/cn";
import PasswordInput from "../components/common/PasswordInput";
import Alert from "../components/common/Alert";



const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  //login query with tanstack query
  const { isPending, mutate } = useMutation({
    mutationFn: login,
    mutationKey: ['auth/login'],
    onSuccess: (response) => {
      const data = response.data;
      console.log(data);
      localStorage.setItem('auth', JSON.stringify({
        user: data?.user,
        accessToken: data?.tokens?.accessToken,
        refreshToken: data?.tokens?.refreshToken,
      })
      );

      setAuth({
        user: data.user,
        accessToken: data?.tokens?.accessToken,
        refreshToken: data?.tokens?.refreshToken,
      })

      if (response && response?.data?.user?.role === 'admin') {
        setTimeout(() => navigate("/admin/dashboard/quizzes", { replace: true }),
          0);
      } else {
        navigate("/", { replace: true });
      }
    },
    onError: (error) => {
      setError('root', {
        type: 'loginError',
        message: error?.message.includes('AxiosError:') ? error?.message.split(':')[1] : error.message,
      });
    }
  });

  const submitForm = (data) => {
    mutate(data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputField htmlfor='email' label='Enter your email' error={errors?.email}>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type='email'
            id='email'
            name="email"
            className={cn(`px-4 py-3 w-full rounded-lg border border-gray-300 dark:bg-dark-secondary dark:text-dark-textPrimary`,
              errors?.email && 'border-red-500 focus:outline-red-500')}
            placeholder="Enter your email or username"
          />
        </InputField>

        <InputField htmlfor='password' label='Enter your password' error={errors?.password} className='mb-6'>
          <PasswordInput
            name='password'
            id='password'
            register={register}
            errors={errors}
            validations={{
              required: "Password is required*",
            }}
          />
        </InputField>

        {errors?.root && <Alert text={errors?.root?.message} />}

        <button
          type='submit'
          disabled={isPending}
          className='py-3 mb-4 w-full text-white rounded-lg bg-primary'>
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
