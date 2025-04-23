import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShieldCheckIcon from "./icons/ShieldCheckIcon";
import LayoutDashboard from "./icons/LayoutDashboard";
import Users from "./icons/Users";
import Package from "./icons/Package";
import Menu from "./icons/Menu";
import LogOut from "./icons/LogOut";
import Cancel from "./icons/Cancel";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const pathname = location.pathname;

  // Definimos los elementos de navegación
  const navItems = [
    {
      href: "/",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/products",
      title: "Productos",
      icon: Package,
    },
    {
      href: "/users",
      title: "Usuarios",
      icon: Users,
    },
    {
      href: "/roles",
      title: "Roles",
      icon: ShieldCheckIcon,
      role: "superadmin",
    },
  ];

  const filteredNavItems = navItems.filter(
    (item) =>
      !item.role ||
      item.role === user.Role.toLowerCase()
  );

  return (
    <div className="flex h-16 items-center border-b px-4 mb-2">
      {/* Menú móvil */}
      <div className="relative md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm"
        >
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </button>

        {open && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* Panel lateral */}
            <div className="fixed inset-y-0 left-0 z-50 w-[240px] sm:w-[300px] bg-white shadow-lg">
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="p-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
                  >
                    <Cancel />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <nav className="flex flex-col gap-4 py-4">
                  {filteredNavItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        window.location.href = item.href;
                      }}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === item.href
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <item.icon />
                      {item.title}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      window.location.href = "/";
                    }}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm
          font-medium text-red-600 hover:bg-gray-100"
                  >
                    <LogOut />
                    Cerrar Sesión
                  </NavLink>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navegación escritorio */}
      <div className="hidden md:flex">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-semibold hover:opacity-55"
        >
          <Package />
          <span className="text-lg">Sistema de Gestión</span>
        </NavLink>

        <nav className="flex items-center gap-6 px-14">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={`flex items-center gap-2 text-base font-medium transition-colors px-2 pt-1 hover:opacity-55 ${
                pathname === item.href &&
                "border-b-2 rounded-md border-amber-500"
              }`}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Avatar y datos de usuario */}
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden md:block">
          <div className="text-sm font-medium">{user.name}</div>
          <div className="text-xs text-gray-500">
            {user.Role ? user.Role : "Sin Rol"}
          </div>
        </div>
        <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-sm font-medium">
            {user.name.substring(0, 2).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
