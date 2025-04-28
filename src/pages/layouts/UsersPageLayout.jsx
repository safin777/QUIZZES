import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";


const UsersPageLayout = () => {
    return (
        <div className='bg-[#F5F3FF] dark:bg-dark-primary dark:text-primary min-h-screen'>
            <div className='container py-3 mx-auto'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default UsersPageLayout;