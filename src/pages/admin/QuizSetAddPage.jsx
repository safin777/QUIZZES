import { motion } from "motion/react";
import { easeIn } from "motion";
import BreadCrumbs from "../../admin/components/BreadCrumbs";
import QuizsetCreateForm from "../../admin/forms/QuizsetCreateForm";


const QuizSetAddPage = () => {
    return (
        <motion.main
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='px-4 py-8 dark:text-dark-textPrimary md:flex-grow sm:px-6 lg:px-8'>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                {/* Left Column */}
                <div>
                    <BreadCrumbs />
                    <h2 className='mb-6 text-3xl font-bold'>
                        Give your quiz title and description
                    </h2>
                    <QuizsetCreateForm />
                </div>
            </div>
        </motion.main>

    )
}
export default QuizSetAddPage