import { Navigate, useLocation } from 'react-router';
import Loader from '../components/ui/Loader';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) { return <Loader /> };
  if (user && user?.uid) return children;
  else return <Navigate state={{ from: location }} to='/auth/login' />;
}

export default PrivateRoute