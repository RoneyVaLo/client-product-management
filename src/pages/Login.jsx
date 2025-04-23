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

      const { status } = response;

      if (status === 429) {
        toast.error("Demasiadas solicitudes, inténtelo de nuevo más tarde.", {
          position: "top-center",
        });
      } else  if (status === 200) {
        toast.success("Inicio de Sesión Exitoso!", {
          position: "top-center",
        });
        navigate("/");
      } else {
        toast.error("Usuario o Contraseña Inválido!", {
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
