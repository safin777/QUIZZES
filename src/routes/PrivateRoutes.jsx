import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";

import QuizProvider from "../providers/QuizProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <div className="container py-3 mx-auto">
      <Header />
      <QuizProvider>
        {auth?.authToken ? (
          <>
            <div>
              <Outlet />
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </QuizProvider>
    </div>
  );
};

export { PrivateRoutes };
