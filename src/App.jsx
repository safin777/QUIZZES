import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/Loginpage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
