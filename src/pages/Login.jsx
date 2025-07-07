import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineKey, HiOutlineMail } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router";
import LoginLottie from "../assets/login.json";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
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
          <form className="text-lg">
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

            <button className="w-full flex justify-center items-center-safe gap-2 bg-brand hover:bg-brand/87 text-white rounded-xl py-3 text-base font-medium font-funnel-display mt-4">
              <MdLogin size={22} />
              LOG IN
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
  );
};

export default Login;
