import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineKey, HiOutlineMail } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import LoginLottie from "../assets/login.json";
import GoogleLogin from "../components/GoogleLogin";
import useAuth from "../hooks/useAuth";
import saveUserInDb from '../utils/saveUserInDb';

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const from = location.state?.from?.pathname || '/';
  // const emailRef = useRef();

  const notifySuccess = (msg) => toast.success(<ToastSuccess msg={msg} />);
  const notifyFailed = (error, msg) => toast.error(<ToastFailed error={error} msg={msg} />);
  const ToastSuccess = ({ msg }) => (
    <span className='text-lg text-green-600 font-semibold font-ibm leading-6'>{msg}</span>
  );
  const ToastFailed = ({ error, msg }) => (
    <div className='font-semibold font-ibm'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-ibm leading-6'>{msg}</span>
      </div>
      <p>{error}</p>
    </div>
  );

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleLogin = async (e) => {
    if (signingIn) return;
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Step 1: Firebase Auth
      await signIn(email, password);

      // Step 2: Save user to DB (last_loggedIn gets updated)
      await saveUserInDb({ email });

      // Step 3: Get JWT (server sets secure cookie)
      const res = await fetch("https://ph-assignment-11-server-sandy.vercel.app/jwt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to get token");

      notifySuccess("Login successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      notifyFailed(err.message || "Login failed", "Authentication error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Servora</title>
        <meta name="description" content="Home page of FixMate SPA" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-transparent px-2 md:px-6 py-12">
        <div className="w-full max-w-6xl bg-white dark:bg-[#0B1327] shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left - Lottie */}
          <div className="lg:w-2/5 bg-brand flex items-center justify-center p-6" data-aos="fade-right">
            <div className="max-w-xs w-full">
              <Lottie animationData={LoginLottie} loop />
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:w-3/5 p-10 md:p-16" data-aos="fade-left">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <Link to={`/`} className="flex shrink-0 items-center gap-1">
                <img className="w-7" src="/favicon.jpg" alt={`Servora (Image not found)`} />
                <p className="font-hanuman font-bold text-2xl text-text ml-1 mt-2">Servora</p> {/* Removed place-items-end */}
              </Link>
              <div className="space-x-2">
                <span className="text-text">Don't have an account?</span>
                <Link to="/auth/sign-up" className="text-brand dark:text-[#3a74f1] hover:underline text-lg font-bold font-funnel-display">
                  Register.
                </Link>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-funnel-display text-brand mb-1 mt-12 ">Welcome Back!</h2>
            <p className="text-text mb-8 text-base md:text-lg">
              Connect with our community.
            </p>

            {/* Form */}
            <form onSubmit={handleLogin} className="text-lg">
              <>
                <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input">
                  <div className="ml-3 text-[#848f95]"><HiOutlineMail size={24} /></div>
                  <input type="email" name='email' className="text-black dark:text-[#f4fbff]" placeholder="Enter your email address ..." required />
                </label>
                <p className="validator-hint hidden text-red-500 text-sm">❌ Enter valid email address</p>
              </>
              <>
                <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input text-text mt-4">
                  <div className="ml-3 text-[#848f95]"><HiOutlineKey size={24} /></div>
                  <input type={showPassword ? 'text' : 'password'} name='password' minLength="6"
                    className="text-black dark:text-[#f4fbff]" placeholder="Enter your password ..." aria-label="Password" required />

                  <button type='button' className="cursor-pointer text-[#848f95]"
                    onClick={() => setShowPassword(vis => !vis)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword} >
                    {showPassword ? (<HiOutlineEyeOff size={24} />) :
                      (<HiOutlineEye size={24} />)}
                  </button>
                </label>
                <p className="validator-hint hidden text-sm">❌ Enter valid email address</p>
              </>

              {/* forgot password */}
              <div className="mb-6 text-right mt-1 font-funnel-display">
                <Link className="link link-hover text-[15px]">Forgot Password?</Link>
              </div>

              <button
                disabled={signingIn}
                className={`w-full flex justify-center items-center-safe gap-2 bg-brand hover:bg-brand/87 text-white rounded-xl py-3 text-base font-medium font-funnel-display mt-4 ${signingIn ? "opacity-50 cursor-not-allowed" : ""}`}>
                <MdLogin size={22} />
                {signingIn ? "Signing in..." : "LOG IN"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-grow h-px bg-text/30"></div>
              <span className="text-text whitespace-nowrap ">Or Login With</span>
              <div className="flex-grow h-px bg-text/30"></div>
            </div>


            {/* Google Sign-In */}
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
