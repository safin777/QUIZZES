
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoWhite from "./LogoWhite";
import { adminDashboardNavItems } from "../../data/data";
import AvatarWithDropdown from "../../components/common/AvatarWithDropdown";


const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className='flex relative flex-col p-6 min-w-64 dark:bg-dark-secondary dark:text-dark-textPrimary bg-primary'>
            <div className='mb-10'>
                <Link to='/admin/dashboard/quizzes'>
                    <LogoWhite />
                </Link>
            </div>

            <nav className='flex-grow'>
                <ul className='space-y-2'>
                    {adminDashboardNavItems.length > 0 &&
                        adminDashboardNavItems.map((item) => (
                            <li
                                className='dark:text-dark-textSecondary'
                                key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={
                                        pathname.includes(
                                            item.title
                                                .replace("-", " ")
                                                .toLowerCase()
                                        )
                                            ? "block py-2 px-4 rounded-lg bg-buzzr-purple bg-white text-primary font-bold"
                                            : "block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
                                    }>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
            
            <AvatarWithDropdown showName={true} placeLocation='dashboard' />
        </aside>
    )


}


export default Sidebar;