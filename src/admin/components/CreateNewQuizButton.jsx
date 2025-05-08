import { Link } from "react-router-dom";
import PlusIcon from "../../svg/PlusIcon";

const CreateNewQuizButton = () => {
    return (
        <Link to='/admin/dashboard/quizzes/add' className='group'>
            <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-dark-textSecondary dark:border-dark-textSecondary dark:text-dark-textPrimary'>
                <div className='mb-4 transition-all text-buzzr-purple group-hover:scale-105'>
                    <PlusIcon />
                </div>
                <h3 className='mb-2 text-lg font-semibold transition-all group-hover:scale-105'>
                    Create a new quiz
                </h3>
                <p className='text-sm text-gray-600 transition-all group-hover:scale-105'>
                    Build from the ground up
                </p>
            </div>
        </Link>
    );
};

export default CreateNewQuizButton;