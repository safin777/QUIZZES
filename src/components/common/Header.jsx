import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../auth/Logout";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <header className="flex items-center justify-between mb-12">
      <Link to="/">
        <img src={Logo} className="h-7" />
      </Link>

      <div>
        <button
          onClick={handleLogin}
          className="px-4 py-2 transition-colors rounded hover:bg-primary hover:text-white fontJero"
        >
          Login
        </button>

        <Logout />
        <Link to="/quiz">Quiz</Link>
      </div>
    </header>
  );
};

export default Header;
