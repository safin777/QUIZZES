import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../components/common/PageTitle";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import Greetings from "../../admin/components/Greetings";
import QuizsetList from "../../admin/components/QuizsetList";
import CreateNewQuizButton from "../../admin/components/CreateNewQuizButton";
import ErrorComponent from "../../components/common/ErrorComponent";
import QuizSkelitonCardAdmin from "../../components/skeletons/QuizSkelitonCardAdmin";
import { getSortedQuizList, getSortedByUpdatedAt } from "../../utils";
import NoData from "../../components/common/NoData";
import AdminsQuizsetCard from "../../admin/components/AdminsQuizsetCard";

const DashboardPage = () => {
    const { getAllQuizSet } = useAdminApiHandlers();
    const { data, isLoading, error } = useQuery({
        queryFn: getAllQuizSet,
        queryKey: ["admin", "quizzes"],
    })
    const sortedData = getSortedByUpdatedAt(data);
    return (
        <main className='overflow-scroll flex-grow p-10 max-h-screen'>
            <PageTitle title="Quizzes-Dashboard" />
            <Greetings />
            <QuizsetList>
                <CreateNewQuizButton />
                {isLoading ? (
                    <QuizSkelitonCardAdmin />
                ) : error ? (
                    <div className='error w-[700px] p-2 bg-gray-200'>
                        <ErrorComponent />
                    </div>
                ) : data && data.length > 0 ? (
                    getSortedQuizList(sortedData).map((quizCard) => (
                        <AdminsQuizsetCard
                            key={quizCard.id}
                            quizCard={quizCard}
                        />
                    ))
                ) : (
                    <div className='flex place-content-center'>
                        <NoData text={`You don't have added ant quiz yet.`} />
                    </div>
                )}
            </QuizsetList>
        </main>
    )
}

export default DashboardPage
