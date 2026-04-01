import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateUserPage from "../Pages/CreateUserPage";
import AllUsersPage from "../Pages/AllUsersPage";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-user",
        element: (
          <PrivateRoute>
            <CreateUserPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-users",
        element: (
          <PrivateRoute>
            <AllUsersPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);