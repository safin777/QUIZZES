import { server_base_url } from "../../static";
import { useAuth } from "./useAuth";
import { useAxios } from "./useAxios";

const useUsersApiHandlers = () => {
    const { api } = useAxios();
    const { auth } = useAuth();

    //get all quiz set
    const getQuizsetList = async () => {
        try {
            const response = await api.get(`${server_base_url}/quizzes`, {
                headers: {
                    Authorization: `Bearer ${auth?.accessToken}`,
                },
            });
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("Failed to fetch quizset list");
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    const getAttempts = async ({ queryKey }) => {
        try {
            const response = await api.get(`${server_base_url}/quizzes/${queryKey[1]}/attempts`, {
                headers: {
                    Authorization: `Bearer ${auth?.accessToken}`,
                },
            })
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while fatching result");
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        getQuizsetList,
        getAttempts,
    }
}

export default useUsersApiHandlers;