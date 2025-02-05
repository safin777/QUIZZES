// import { useContext } from "react";
// import { QuizContext } from "../contexts";

// export const useQuiz = () => {
//   return useContext(QuizContext);
// };

import { useReducer } from 'react';
import { quizReducer, initialState } from '../reducers/QuizReducer';

export const useQuiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return {
    state,
    dispatch
  };
};


