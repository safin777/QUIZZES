import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <header className="flex items-center justify-between mb-12">
        <img src={Logo} className="h-7" />
        <div>
          <button
            onClick={handleLogin}
            className="px-4 py-2 transition-colors rounded hover:bg-primary hover:text-white fontJero"
          >
            Login
          </button>

          <button className="px-4 py-2 transition-colors rounded hover:bg-primary hover:text-white fontJero">
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
