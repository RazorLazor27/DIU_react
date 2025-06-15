import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("USER_LOGIN") === "true";
    const savedEmail = sessionStorage.getItem("USER_NAME");
    if (loggedIn) {
      setUser({ logged: true });
      setUser({ name: savedEmail });
    }
  }, []);
  
  const startLogin = () => {
    setIsLoggingIn(true);
  }

  const endLogin = () => {
    setIsLoggingIn(false);
  }

  const login = () => {
    sessionStorage.setItem("USER_LOGIN", "true");
    setUser({ logged: true });
  };

  const logout = () => {
    sessionStorage.removeItem("USER_LOGIN");
    sessionStorage.removeItem("USER_NAME");
    setUser(null);
  };

  const credentials = (user, rol) => {
    sessionStorage.setItem("USER_NAME", user);
    sessionStorage.setItem("USER_ROL", rol);
    setUser({
      name: user,
      rol: rol
    });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, credentials, isLoggingIn, startLogin, endLogin}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}