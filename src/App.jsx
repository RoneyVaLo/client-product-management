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

const App = () => {
  const { user, loading } = useAuth();

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
            { path: "products", element: <ProductManagement /> },
            {
              path: "roles",
              element:
                user?.role.toLowerCase() === "superadmin" ? (
                  <RoleManagement />
                ) : (
                  <Navigate to="/" replace />
                ),
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
