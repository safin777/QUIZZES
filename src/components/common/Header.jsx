import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import Logout from "../../auth/Logout";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    
      <header className="flex items-center justify-between mb-12">
        <img src={Logo} className="h-7" />
        <div>
          <button
            onClick={handleLogin}
            className="px-4 py-2 transition-colors rounded hover:bg-primary hover:text-white fontJero"
          >
            Login
          </button>

          <Logout/>
        </div>
      </header>
    
  );
};

export default Header;
