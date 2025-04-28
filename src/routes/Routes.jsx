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



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<UsersPageLayout />} errorElement={<ErrorPage />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/' element={<HomePage />} />
                {/* Private routes for users */}
                <Route element={<PrivateRoutes/>}>

                </Route>

                {/*these are appliction auth routes for login and registration. these are not protected */}

            </Route>

            {/*these are appliction auth routes for login and registration. these are not protected */}

            <Route path="/login" errorElement={<ErrorPage/>} element={<LoginPage/>}></Route>
            <Route path='/register' errorElement={<ErrorPage/>} element={<RegisterPage/>}></Route>
        </>
    )
);
const Routes = () => (
    <RouterProvider
        router={router}
    />
);

export default Routes

