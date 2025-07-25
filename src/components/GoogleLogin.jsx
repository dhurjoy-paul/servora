import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from '../hooks/useAuth';
import saveUserInDb from '../utils/saveUserInDb';

const GoogleLogin = () => {
  const { signInWithGoogle, setUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signingIn, setSigningIn] = useState(false);

  const notifySuccess = () => toast.success(<ToastSuccess />);
  const notifyFailed = (error) => toast.error(<ToastFailed error={error} />);
  const notifyInvalid = (msg) => toast.error(<ToastInvalid msg={msg} />);

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
  const ToastInvalid = ({ msg }) => (
    <span className='text-lg text-red-600 font-semibold font-poppins'>{msg}</span>
  );

  const handleGoogleSignIn = async () => {
    if (signingIn) return;
    setSigningIn(true);

    try {
      const result = await signInWithGoogle();

      if (!result?.user) throw new Error("No user returned from signInWithGoogle");

      const email = result?.user?.email || result?.user?.providerData?.[0]?.email || null;

      if (!email) throw new Error("Google account email not available");

      setUser((prev) => ({ ...prev, email: result?.user?.email || result?.user?.providerData?.[0]?.email || null }));

      const userData = {
        name: result.user.displayName,
        email: result.user.email || result?.user?.providerData?.[0]?.email || null,
        image: result.user.photoURL,
        uid: result.user.uid
      };

      // 1. Save user to DB
      await saveUserInDb(userData);

      // 2. Get JWT token from your backend
      const jwtRes = await fetch("http://localhost:3000/jwt", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });

      const jwtData = await jwtRes.json();

      if (!jwtRes.ok || !jwtData?.success) {
        throw new Error("Failed to generate login token");
      }

      // 3. Done
      notifySuccess();
      navigate(from, { replace: true });

    } catch (error) {
      const message = error?.message || "Something went wrong during registration";

      console.error("Register Error:", error);

      if (message.includes("auth/email-already-in-use")) {
        notifyInvalid("Email already in use.");
      } else {
        notifyFailed(message);
      }
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={signingIn}
      className={`w-full flex justify-center items-center gap-2 transition-colors bg-zinc-100 dark:bg-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-100 border border-gray-500 rounded-xl py-3 text-black font-medium font-funnel-display ${signingIn ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <FcGoogle size={22} /> {signingIn ? "Signing in..." : "Login with Google"}
    </button>
  );
};

export default GoogleLogin;
