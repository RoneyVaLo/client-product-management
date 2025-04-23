import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  // TODO: Debo mover ese boton a un submenú del navbar
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
