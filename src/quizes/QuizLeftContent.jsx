import { useAuth } from "../hooks/useAuth";
import Avatar from "../assets/avater.webp";
const QuizLeftContent = ({quizSet}) => {
  const { auth } = useAuth();
  return (
    <div className="flex flex-col p-6 h-full bg-white rounded-md lg:col-span-1">
      <div>
        <h2 className="mb-4 text-4xl font-bold">{quizSet?.data?.title}</h2>
        <p className="mb-4 text-gray-600">
        {quizSet?.data?.description}
        </p>

        <div className="flex flex-col">
          <div className="inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-green-800 bg-green-100 rounded-full w-fit">
            Total number of questions : {quizSet?.data?.stats?.total_questions}
          </div>

          <div className="inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full w-fit">
            Participation : 1
          </div>

          <div className="inline-block px-2.5 py-0.5 mb-2 text-sm font-medium text-green-800 bg-gray-100 rounded-full w-fit">
            Remaining : 9
          </div>
        </div>
      </div>

      <div className="flex items-center mt-auto">
        <img
          src={Avatar}
          alt={auth?.user?.full_name}
          className="object-cover mr-3 w-10 h-10 rounded-full"
        />
        <span className="font-semibold text-black">{auth?.user?.full_name}</span>
      </div>
    </div>
  );
};

export default QuizLeftContent;
