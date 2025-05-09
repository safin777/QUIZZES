import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import useUsersApiHandlers from "../hooks/useUsersApiHandlers";
import PageTitle from "../components/common/PageTitle";
import Profile from "../profile/Profile";
import QuizCardSkeleton from "../components/skeletons/QuizCardSkeleton";
import ErrorComponent from "../components/common/ErrorComponent";
import QuizListSection from "../components/userPanel/QuizListSection";
import UserQuizCard from "../components/userPanel/UserQuizCard";
const HomePage = () => {
  const { auth } = useAuth();
  const { getQuizsetList } = useUsersApiHandlers();
  const { isLoading, data, error } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getQuizsetList,
  });

  const quizList = data?.data;
  

  return (
    <>
      <PageTitle title='Quizzes - Home' />
      {auth?.user && <Profile />}

      <main className='p-6 h-full bg-white rounded-md dark:bg-dark-secondary'>
        <section>
          <h3 className='mb-6 text-2xl font-bold dark:text-dark-textSecondary'>
            Participate In Quizees
          </h3>

          {isLoading ? (<QuizCardSkeleton />) : error ? (<ErrorComponent />) : (
            <QuizListSection>
              {quizList && quizList.length > 0 && quizList.map((quizSet) => (
                <UserQuizCard key={quizSet?.id} quizSet={quizSet} />
              ))}
            </QuizListSection>
          )}

        </section>
      </main>
    </>
  );
};

export default HomePage;
