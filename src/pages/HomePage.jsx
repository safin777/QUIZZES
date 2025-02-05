import Profile from "../profile/Profile";
import QuizList from "../quizes/QuizList";

import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { actions } from "../actions/index";
import { useQuiz } from "../hooks/useQuiz";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { state, dispatch } = useQuiz();
  const { api } = useAxios();
  const { auth } = useAuth();
  useEffect(() => {
    dispatch({ type: actions.quiz.QUIZ_DATA_FETCHING });
    const fetchQuizes = async () => {
      try {
        console.log("fecthing..");
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/quizzes`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.quiz.QUIZ_DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizes();
  }, []);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching Quizes {state?.error?.message}</div>;
  }

  return (
    <>
      {auth?.user ? <Profile /> : ""}
      <main className="h-full p-6 bg-white rounded-md">
        <section>
          <h3 className="mb-6 text-2xl font-bold">Participate In Quizees</h3>
          <QuizList quizes={state?.quizes.data}/>
        </section>
      </main>
    </>
  );
};

export default HomePage;
