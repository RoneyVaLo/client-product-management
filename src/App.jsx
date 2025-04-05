import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ProductManagement from "./pages/ProductManagement";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const App = () => {
  // TODO: Implementar esto con el contexto
  const user = false;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      errorElement: <div>Not Found 404</div>,
      children: [
        {
          path: "/",
          element: user ? <Layout /> : <Login />,
          errorElement: <div>Not Found 404</div>,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            { path: "/users", element: <UserManagement /> },
            { path: "/products", element: <ProductManagement /> },
            { path: "/roles", element: <RoleManagement /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
