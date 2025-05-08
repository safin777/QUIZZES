import { useState } from "react";
import cn from '../../utils/cn';
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { easeIn } from "motion";
import QuizIcon from "../../svg/QuizIcon";
import CardActions from "./CardActions";


const AdminsQuizsetCard = ({ quizCard }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className={cn(
                `bg-white relative dark:text-dark-textPrimary ring-primary p-6 rounded-lg shadow-sm border  border-gray-200 group cursor-pointer `,
                quizCard.status === "draft" &&
                "bg-gray-800/50 dark:border-dark-secondary",
                quizCard.status === "published" &&
                "bg-purple-800 text-white dark:bg-dark-optimal dark:border-dark-textSecondary"
            )}
            onMouseEnter={() => {
                setMenuOpen(true);
            }}
            onMouseLeave={() => {
                setMenuOpen(false);
            }}
            onClick={() =>
                navigate(`/admin/dashboard/quizzes/${quizCard?.id}`)
            }>
            <div>
                {/* Status Tag */}
                <div className='status absolute bottom-1 -right-[20px] z-20'>
                    {quizCard.status === "draft" && (
                        <h4 className='px-4 mr-8 h-6 text-white align-middle rounded-full status bg-gray-500/80 w-128'>
                            Draft
                        </h4>
                    )}
                    {quizCard.status === "published" && (
                        <h4 className='px-2 mr-8 h-6 text-white align-middle rounded-full status bg-green-500/80 w-120'>
                            Published
                        </h4>
                    )}
                </div>
                <div className='questionCount absolute bottom-1 left-[10px] z-20'>
                    <h4 className='px-4 mr-8 h-6 text-white align-middle rounded-full status bg-gray-500/80 w-128'>
                        {quizCard?.Questions.length} Questions
                    </h4>
                </div>

                {/* Icon */}
                <div className='mb-4 transition-all text-buzzr-purple group-hover:scale-105'>
                    <QuizIcon />
                </div>

                {/* Title */}
                <h3 className='mb-2 text-lg font-semibold transition-all group-hover:scale-105'>
                    {quizCard?.title}
                </h3>

                {/* Description */}
                <p
                    className={cn(
                        `text-gray-600 text-sm group-hover:scale-105 truncate text-clip transition-all`,
                        quizCard.status === "published" &&
                        "text-white !truncate !text-clip"
                    )}>
                    {quizCard?.description}
                </p>

                <div className='absolute top-4 right-4'>
                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <CardActions
                            quizCard={quizCard}
                            setMenuOpen={setMenuOpen}
                        />
                    )}
                </div>
            </div>

        </motion.div>
    )

}
export default AdminsQuizsetCard