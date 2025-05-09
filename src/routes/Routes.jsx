import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import UsersPageLayout from "../pages/layouts/UsersPageLayout";
import ErrorPage from "../pages/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import QuizPage from "../pages/user/QuizPage";
import ResultPage from "../pages/user/ResultPage";
import AdminPageLayout from "../pages/layouts/AdminPageLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import QuizSetAddPage from "../pages/admin/QuizSetAddPage";
import QuizEntryPage from "../pages/admin/QuizEntryPage";
import NoContentPage from "../pages/admin/NoContentPage";
import LeaderBoardPage from "../pages/user/LeaderBoardPage";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<UsersPageLayout />} errorElement={<ErrorPage />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/' element={<HomePage />} />
                {/* Private routes for users */}
                <Route element={<PrivateRoutes />}>
                    <Route path='/quizzes/:quizsetId' element={<QuizPage />} />
                    <Route
                        path='/leaderboard/:quizsetId'
                        element={<LeaderBoardPage />}
                    />
                </Route>
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path='/result/:quizsetId' element={<ResultPage />} />
            </Route>




            {/*these are appliction auth routes for login and registration. these are not protected */}
            <Route path="/login" errorElement={<ErrorPage />} element={<LoginPage />}></Route>
            <Route path='/register' errorElement={<ErrorPage />} element={<RegisterPage />}></Route>

            {/* role based routing : Admin */}
            {/*below routes use a layout for admin's pages */}

            <Route errorElement={<ErrorPage />}
                path="/admin"
                element={<AdminPageLayout />}
            >
                <Route path='*' element={<NotFoundPage />} />
                <Route
                    path='/admin/dashboard/quizzes'
                    element={<DashboardPage />}
                />
                <Route
                    path='/admin/dashboard/quizzes/add'
                    element={<QuizSetAddPage />}
                />

                <Route
                    path='/admin/dashboard/quizzes/:quizsetId'
                    element={<QuizEntryPage />}
                />

                <Route
                    path='/admin/dashboard/settings'
                    element={<NoContentPage />}
                />
                <Route
                    path='/admin/dashboard/manage-users'
                    element={<NoContentPage />}
                />
                <Route
                    path='/admin/dashboard/manage-roles'
                    element={<NoContentPage />}
                />


            </Route>
        </>
    )
);
const Routes = () => (
    <RouterProvider
        router={router}
    />
);

export default Routes

