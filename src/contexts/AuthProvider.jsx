import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const userId = JSON.parse(localStorage.getItem("userId"));
        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          // console.log(response.data);
          setUser(response.data);
        }
      }
    };
    fetchUser();
    setLoading(false);
  }, []);

  const getCurentUser = async (token, userId) => {
    const response = await axios.get(
      `http://localhost:3000/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      // console.log(response.data);
      return response.data;
    }

    return null;
  };
  
  const login = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData
      );
      const { token, user } = response.data;

      // console.log(response);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", JSON.stringify(user.id));

      const currentUser = await getCurentUser(token, user.id);
      setUser(currentUser);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
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
