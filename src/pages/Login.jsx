import React from "react";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);

      const { code, message } = response;

      if (code === 200) {
        toast.success(message, {
          position: "top-center",
        });
        navigate("/");
      } else {
        toast.error(message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al iniciar sesión");
    }
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default Login;
