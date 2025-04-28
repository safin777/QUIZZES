import QuizCard from "./QuizCard";

const QuizList = ({ quizes }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {!!quizes && quizes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)}
    </div>
  );
};

export default QuizList;
