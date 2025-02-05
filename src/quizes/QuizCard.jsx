import { useNavigate } from "react-router-dom";
import BackImg2 from "../assets/backgrounds/2.jpg";

import { useAuth } from "../hooks/useAuth";

const QuizCard = ({ quiz }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const handleCardRedirection = () => {
    if (auth?.user) {
      console.log(auth.user);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <a
        className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
        onClick={handleCardRedirection}
      >
        <div className="absolute px-4 text-center text-white transition-all -translate-y-1/2 group-hover:scale-105 top-1/2">
          <h1 className="text-5xl fontJero ">{quiz.title}</h1>
          <p className="mt-2 text-lg">{quiz.description}</p>
        </div>
        {quiz.is_attempted ?? (
          <div className="absolute top-0 left-0 hidden w-full h-full text-white transition-all bg-black/80 group-hover:grid place-items-center">
            <div>
              <h1 className="text-3xl font-bold">Already Participated</h1>
              <p className="text-center">Click to view your leaderboard</p>
            </div>
          </div>
        )}

        <img
          src={BackImg2}
          alt={quiz.title}
          className="object-cover w-full h-full mb-4 rounded"
        />
      </a>
    </div>
  );
};

export default QuizCard;
