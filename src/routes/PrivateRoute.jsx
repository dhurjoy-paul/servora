import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/ui/Loader';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) { return <Loader /> };
  if (user && user?.uid) return children;
  else return <Navigate state={{ from: location }} to='/auth/login' />;
}

export default PrivateRoute