import { QuizContext } from "../contexts";
import { useReducer } from "react";
import { quizReducer, initialState } from "../reducers/QuizReducer";

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
