import { createBrowserRouter } from "react-router";
import Loader from '../components/ui/Loader';
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import AddService from '../pages/private/AddService';
import BookedServices from '../pages/private/BookedServices';
import ManageServices from '../pages/private/ManageServices';
import ServiceDetails from '../pages/private/ServiceDetails';
import ServiceToDo from '../pages/private/ServiceToDo';
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('http://localhost:3000/services/random/6')
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/add-service',
        element: <PrivateRoute> <AddService /> </PrivateRoute>
      },
      {
        path: '/manage-services',
        element: <PrivateRoute> <ManageServices /> </PrivateRoute>
      },
      {
        path: '/booked-services',
        element: <PrivateRoute> <BookedServices /> </PrivateRoute>
      },
      {
        path: '/service-to-do',
        element: <PrivateRoute> <ServiceToDo /> </PrivateRoute>
      },
      {
        path: '/services/:id',
        element: <PrivateRoute> <ServiceDetails /> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/sign-up', element: <SignUp /> },
    ],
  },
  { path: '/*', element: <NotFoundPage /> },
]);

export default router;