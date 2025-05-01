import { useAuth } from "../../hooks/useAuth";
import defaultAvater from "../../assets/avater.webp";
import cn from "../../utils/cn";
const UserProfileDisplayer = ({ textColor }) => {
    const { auth } = useAuth();

    return (
        <div className='flex items-center mt-auto'>
            <img
                src={defaultAvater}
                alt='Mr Hasan'
                className='object-cover mr-3 w-10 h-10 rounded-full'
            />

            <span
                className={cn(
                    `font-semibold text-white dark:text-dark-textSecondary`,
                    textColor
                )}>
                {auth?.user?.full_name}
            </span>
        </div>
    );
};

export default UserProfileDisplayer;