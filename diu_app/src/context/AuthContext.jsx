import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("USER_LOGIN") === "true";
    if (loggedIn) {
      setUser({ logged: true });
    }
  }, []);

  const login = () => {
    sessionStorage.setItem("USER_LOGIN", "true");
    setUser({ logged: true });
  };

  const logout = () => {
    sessionStorage.removeItem("USER_LOGIN");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}