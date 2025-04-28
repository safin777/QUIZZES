import QuizLeftContent from "../quizes/QuizLeftContent";
import QuizRightContent from "../quizes/QuizRightContent";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { useQuizSet } from "../hooks/useQuizSet";
import { actions } from "../actions";

const QuizPage = () => {
  const quizId = useParams();
  const { api } = useAxios();
  const { state, dispatch } = useQuizSet();

  const questions = state?.quizSet?.data?.questions;
  
  useEffect(() => {
    dispatch({ type: actions.quizId.QUIZ_DATA_FETCHING_BY_ID });
    const fetchQuizSetInfo = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/quizzes/${quizId.quizId}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.quizId.QUIZ_DATA_FETCHED_BY_ID,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.quizId.QUIZ_DATA_ERROR_BY_ID,
          error: error.message,
        });
      }
    };
    fetchQuizSetInfo();
  }, [quizId.quizId, api, dispatch]);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div>{state?.error}</div>;
  }
  
  return (
    <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
      <div className="grid grid-cols-1 gap-10 h-full lg:grid-cols-3">
        <QuizLeftContent quizId={quizId} quizSet={state?.quizSet} />
        <QuizRightContent quizId={quizId} questions={questions}/>
      </div>
    </main>
  );
};

export default QuizPage;
