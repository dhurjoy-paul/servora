import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineKey, HiOutlineMail, HiOutlinePhotograph, HiOutlineUser } from "react-icons/hi";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router";
import RegisterLottie from "../assets/register.json";
import GoogleLogin from "../components/GoogleLogin";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-2 md:px-6 py-12">
      <div className="w-full max-w-6xl bg-white dark:bg-[#0B1327] shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        {/* left - Form */}
        <div className="lg:w-3/5 p-10 md:p-16" data-aos="fade-right">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <Link to={`/`} className="flex shrink-0 items-center gap-1">
              <img className="w-7" src="/favicon.jpg" alt={`Servora (Image not found)`} />
              <p className="font-hanuman font-bold text-2xl text-text ml-1 mt-2">Servora</p> {/* Removed place-items-end */}
            </Link>
            <div className="space-x-2">
              <span className="text-text">Already have an account?</span>
              <Link to="/auth/login" className="text-brand dark:text-[#3a74f1] hover:underline text-lg font-bold font-funnel-display">
                Login.
              </Link>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-funnel-display text-brand mb-1 mt-12 ">Create Your Free Account!</h2>
          <p className="text-text mb-8 text-base md:text-lg w-[90%]">
            Join Servora to share your services or discover trusted providers near you.
          </p>

          {/* Form */}
          <form className="text-lg">
            <>
              <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input">
                <div className="ml-3 text-[#848f95]"><HiOutlineUser size={24} /></div>
                <input type="text" name='name' className="text-black dark:text-[#f4fbff]" placeholder="Enter your fullname ..." required />
              </label>
              <p className="validator-hint hidden text-red-500 text-sm">❌ Enter your name</p>
            </>
            <>
              <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input mt-4">
                <div className="ml-3 text-[#848f95]"><HiOutlinePhotograph size={24} /></div>
                <input type="url" name='picture' className="text-black dark:text-[#f4fbff]" placeholder="Enter your photo URL ..." required />
              </label>
              <p className="validator-hint hidden text-red-500 text-sm">❌ Enter your photo URL</p>
            </>
            <>
              <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input mt-4">
                <div className="ml-3 text-[#848f95]"><HiOutlineMail size={24} /></div>
                <input type="email" name='email' className="text-black dark:text-[#f4fbff]" placeholder="Enter your email address ..." required />
              </label>
              <p className="validator-hint hidden text-red-500 text-sm">❌ Enter valid email address</p>
            </>
            <>
              <label className="input gap-4 pr-5 validator text-lg w-full h-12 rounded-lg bg-input text-text mt-4">
                <div className="ml-3 text-[#848f95]"><HiOutlineKey size={24} /></div>
                <input type={showPassword ? 'text' : 'password'} name='password' minLength="6"
                  className="text-black dark:text-[#f4fbff]" placeholder="Enter strong password ..." aria-label="Password" required />

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

            <button className="w-full flex justify-center items-center-safe gap-2 bg-brand hover:bg-brand/87 text-white rounded-xl py-3 text-base font-medium font-funnel-display mt-8">
              <LuNotebookPen size={22} />
              SIGN UP
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-grow h-px bg-text/30"></div>
            <span className="text-text whitespace-nowrap ">Or Sign-up With</span>
            <div className="flex-grow h-px bg-text/30"></div>
          </div>


          {/* Google Sign-In */}
          <GoogleLogin />
        </div>

        {/* right - Lottie */}
        <div className="lg:w-2/5 bg-brand flex items-center justify-center p-6" data-aos="fade-left">
          <div className="max-w-xs w-full">
            <Lottie animationData={RegisterLottie} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
