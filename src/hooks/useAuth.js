import { useContext, useDebugValue } from "react";
import { AuthContext } from "../contexts/index";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged In" : "User Logged Out"
  );
  return useContext(AuthContext);
};

export { useAuth };
