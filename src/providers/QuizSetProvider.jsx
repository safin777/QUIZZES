import { QuizSetContext } from "../contexts";
import { useReducer } from "react";
import { quizSetReducer, initialState } from "../reducers/QuizSetReducer";

const QuizSetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizSetReducer, initialState);
  return (
    <QuizSetContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizSetContext.Provider>
  );
};

export default QuizSetProvider;
