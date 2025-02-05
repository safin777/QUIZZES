import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/Loginpage";
import NotFoundPage from "./pages/NotFoundPage";
import { PrivateRoutes } from "./routes/PrivateRoutes";

// admin components

import AdminDashboard from "./admin/pages/AdminDashboard";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        </Route>
        <Route
          path="/"
          element={
            <div className="container py-3 mx-auto">
              <Header />
              <HomePage />
            </div>
          }
          exact
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
