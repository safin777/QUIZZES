import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "motion/react";
import { easeIn } from "motion";

import BreadCrumbs from "../../admin/components/BreadCrumbs";
import NoData from "../../components/common/NoData";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";


const QuizEntryPage = () => { 
    const { pathname } = useLocation();
    const quizsetId = pathname.split("/")[4];
    const {getAllQuizSet} = useAdminApiHandlers();
    const [dataToEdit, setDataToEdit] = useState(null);

}
export default QuizEntryPage;