import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <>
      <button
        className="px-4 py-2 transition-colors rounded hover:bg-primary hover:text-white fontJero"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
