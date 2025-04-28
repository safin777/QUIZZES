import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const QuizCard = ({ quiz }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const handleCardRedirection = () => {
    if (auth?.user) {
      navigate(`/quiz/${quiz.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-quiz-id={quiz.id}>
      <a
        className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
        onClick={handleCardRedirection}
      >
        <div className="absolute top-1/2 px-4 text-center text-white transition-all -translate-y-1/2 group-hover:scale-105">
          <h1 className="text-5xl fontJero">{quiz.title}</h1>
          <p className="mt-2 text-lg">{quiz.description}</p>
        </div>
       {quiz.is_attempted ?? (
          <div className="hidden absolute top-0 left-0 place-items-center w-full h-full text-white transition-all bg-black/80 group-hover:grid">
            <div>
              <h1 className="text-3xl font-bold">Already Participated</h1>
              <p className="text-center">Click to view your leaderboard</p>
            </div>
          </div>
        )}

        <img
          src={quiz.thumbnail}
          alt={quiz.title}
          className="object-cover mb-4 w-full h-full rounded"
        />
      </a>
    </div>
  );
};

export default QuizCard;
