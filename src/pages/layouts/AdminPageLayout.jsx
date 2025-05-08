
import Sidebar from "../../admin/components/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const AdminPageLayout = () => {
    const { auth } = useAuth();
    const location = useLocation();

    if (auth?.user?.role !== "admin") {
        return <Navigate to='/' />;
    } else {
        if (location?.pathname === "/admin") {
            return <Navigate to='/admin/dashboard/quizzes' />;
        }
    }

    return(
        <div className='flex min-h-screen bg-gray-100 dark:bg-dark-primary'>
            <Sidebar/>
            <Outlet />
        </div>
    )

}

export default AdminPageLayout