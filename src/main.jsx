import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loader from './components/ui/Loader';
import AuthProvider from './contexts/AuthProvider';
import './index.css';
import router from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
        <ToastContainer autoClose={3500} theme="light"
          closeOnClick pauseOnFocusLoss draggable pauseOnHover='true' />
      </Suspense>
    </AuthProvider>
  </StrictMode>
);
