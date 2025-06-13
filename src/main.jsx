import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './index.css';
import router from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={3500} theme="light"
      closeOnClick pauseOnFocusLoss draggable pauseOnHover='true' />
  </StrictMode>
);
