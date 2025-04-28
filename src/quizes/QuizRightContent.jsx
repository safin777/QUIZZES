import { useEffect, useState } from "react";
const QuizRightContent = ({ questions }) => {
  const [questionCount, setQuestionCount] = useState(0);
  const [currentData, setCurrentData] = useState(null);
  useEffect(() => {
    if (questions) {
      setCurrentData(questions[questionCount]);
    }
  }, [questions]);
  const handleNext = () => {
    setQuestionCount(questionCount + 1);
    setCurrentData(questions[questionCount]);
  };

  return (
    <div className="bg-white lg:col-span-2">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">{currentData.question}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center px-4 py-3 space-x-3 text-lg rounded-md bg-primary/5">
            <input
              type="checkbox"
              name="answer1"
              className="form-radio text-buzzr-purple"
            />
            <span></span>
          </label>

          <label className="flex items-center px-4 py-3 space-x-3 text-lg rounded-md bg-primary/5">
            <input
              type="checkbox"
              name="answer2"
              className="form-radio text-buzzr-purple"
            />
            <span>-1</span>
          </label>

          <label className="flex items-center px-4 py-3 space-x-3 text-lg rounded-md bg-primary/5">
            <input
              type="checkbox"
              name="answer3"
              className="form-radio text-buzzr-purple"
            />
            <span>1</span>
          </label>

          <label className="flex items-center px-4 py-3 space-x-3 text-lg rounded-md bg-primary/5">
            <input
              type="checkbox"
              name="answer4"
              className="form-radio text-buzzr-purple"
            />
            <span>1</span>
          </label>
        </div>

        <a
          onClick={handleNext}
          className="block px-4 py-2 my-8 mb-6 ml-auto w-1/2 font-semibold text-center text-white rounded-md bg-primary hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default QuizRightContent;
