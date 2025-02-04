import Field from "../components/common/Field";
const RegisterForm = () => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <Field
            label="Full Name"
            htmlFor="name"
            error="abcd"
            classNameFor="block mb-2"
          >
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
            />
          </Field>
        </div>

        <div className="mb-4">
          <Field
            label="Email"
            htmlFor="email"
            error="abcd"
            classNameFor="block mb-2"
          >
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Email address"
            />
          </Field>
        </div>

        <div className="flex gap-4">
          <div className="mb-6">
            <Field
              label="Enter your Password"
              classNameFor="block mb-2"
              htmlFor="password"
            >
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Password"
              />
            </Field>
          </div>

          <div className="mb-6">
            <Field
              label="Confirm Password"
              classNameFor="block mb-2"
              htmlFor="password"
            >
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Confirm Password"
              />
            </Field>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-end gap-2 mb-6">
          <Field
            classNameFor="block"
            htmlFor="admin"
            label="Register as Admin"
            error="error"
          >
            <input
              type="checkbox"
              id="admin"
              className="px-4 py-3 border border-gray-300 rounded-lg"
            />
          </Field>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
