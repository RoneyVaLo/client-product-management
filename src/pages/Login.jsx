import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // TODO: Implementar el contexto y la autenticación conectandose con la BD
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return <div>Pantalla para el Inicio de Sesión</div>;
};

export default Login;
