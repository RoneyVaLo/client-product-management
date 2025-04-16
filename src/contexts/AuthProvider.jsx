import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      setUser({ name: "Usuario", role: "SuperAdmin" });
    }
    setLoading(false);
  }, []);

  const login = async (userData) => {
    if (userData.username === "admin" && userData.password === "12345678") {
      setUser({ name: "Usuario", role: "SuperAdmin" });
      localStorage.setItem("token", "valortokenbackend");
      console.log("Usuario seteado en login:", userData);
      
      return {code: 200, message: "Login successful!"};
    }

    return {code: 400, message: "Login failed!"};
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
