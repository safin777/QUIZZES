import Field from "../components/common/Field";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <Field
            label="Enter your username or email address"
            htmlFor="email"
            error="abcd"
            classNameFor="block mb-2"
          >
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Username or email address"
            />
          </Field>
        </div>

        <div className="mb-6">
          <Field label="Enter your Password" htmlFor="password" error="error" classNameFor="block mb-2">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Password"
            />
          </Field>
        </div>

        <div className="gap-2 mb-6 ">
          <Field htmlFor="admin" error="error" label="Login as Admin" classNameFor="block">
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
