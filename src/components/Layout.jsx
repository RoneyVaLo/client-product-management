import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>ESTA VA A SER LA NAVEGACIÓN DE LA PÁGINA</nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
