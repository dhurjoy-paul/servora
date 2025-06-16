import { createBrowserRouter } from "react-router";
import Loader from '../components/ui/Loader';
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]);

export default router;