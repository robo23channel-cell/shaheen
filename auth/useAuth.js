import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  // console.log( useContext(AuthContext));
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    // console.log("holaaaaaaaaaaaaa, ", authToken);
    const user = jwtDecode(authToken);
    // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", user);
    setUser(user);
    authStorage.storeToken(authToken);
    // console.log("kfkfkfkkf",authToken)
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
