import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Loader from '../components/ui/Loader';

const RouteChangeLoader = ({ minDelay = 1000 }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, minDelay);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? (
    <div className="fixed inset-0 bg-white z-[9999] flex justify-center items-center">
      <Loader />
    </div>
  ) : null;
};

export default RouteChangeLoader;
