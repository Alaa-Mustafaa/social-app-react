import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages";
import NotFound from "../pages/NotFound";
import PostDetails from "../pages/PostDetails";
import Profile from "../pages/Profile";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/posts/:id", element: <PostDetails /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);