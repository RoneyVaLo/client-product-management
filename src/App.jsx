import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductManagement from "./pages/ProductManagement";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import ProductForm from "./pages/ProductForm";
import UserForm from "./pages/UserForm";
import RoleForm from "./pages/RoleForm";

const App = () => {
  const { loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <PublicRoute />,
      errorElement: <div>Not Found 404</div>,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      errorElement: <div>Not Found 404</div>,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "users", element: <UserManagement /> },
            { path: "users/new", element: <UserForm /> },
            { path: "users/:id", element: <UserForm /> },
            { path: "products", element: <ProductManagement /> },
            { path: "products/new", element: <ProductForm /> },
            { path: "products/:id", element: <ProductForm /> },
            { path: "roles", element: <RoleManagement />, },
            { path: "roles/new", element: <RoleForm />, },
            { path: "roles/:id", element: <RoleForm />, },
          ],
        },
      ],
    },
    {
      path: "/redirecting",
      element: <div>Redireccionando...</div>,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
