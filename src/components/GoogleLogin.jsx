import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const notifySuccess = () => toast.success(<ToastSuccess />);
  const notifyFailed = (error) => toast.error(<ToastFailed error={error} />);
  const ToastSuccess = () => (
    <span className='text-lg text-green-600 font-semibold font-poppins'>Login successful</span>
  );
  const ToastFailed = ({ error }) => (
    <div className='font-semibold font-poppins'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-poppins'>Login failed</span>
      </div>
      <p>{error}</p>
    </div>
  );

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        notifySuccess();
        navigate(from);
      }).catch((error) => {
        notifyFailed(error.message);
      });
  };
  return (
    <button onClick={handleGoogleSignIn} className="w-full flex justify-center items-center-safe gap-2 bg-zinc-100 dark:bg-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-100 border border-gray-500 rounded-xl py-3 text-black font-medium font-funnel-display">
      <FcGoogle size={22} /> Login with Google
    </button>
  )
}
export default GoogleLogin