import { useReducer } from "react";
import { quizSetReducer, initialState } from "../reducers/QuizSetReducer";

export const useQuizSet = () => {
  const [state, dispatch] = useReducer(quizSetReducer, initialState);
  return {
    state,
    dispatch,
  };
};
