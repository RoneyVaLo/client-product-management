import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../contexts/AuthContext";

const Layout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // window.location.reload();
  };

  // TODO: Debo mover ese boton a un submenú del navbar
  return (
    <>
      <Navbar />
      <header className="w-full bg-red-200">
        <button onClick={handleLogout}>Salir</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
