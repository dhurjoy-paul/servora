import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect } from "react";
import { Link } from "react-router";
import LoginLottie from "../assets/login.json";
import Heading from "../components/Heading";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand/10 px-2 md:px-6 py-12">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left - Lottie */}
        <div className="lg:w-2/5 bg-brand flex items-center justify-center p-6" data-aos="fade-right">
          <div className="max-w-xs w-full">
            <Lottie animationData={LoginLottie} loop={true} />
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:w-3/5 p-10 md:p-16" data-aos="fade-left">
          <div className="flex justify-between items-center mb-4 text-sm">
            <Heading />
            <div className="space-x-2">
              <span className="text-gray-500">Don't have an account?</span>
              <Link to="/auth/login" className="text-brand hover:underline font-medium">
                Sign In.
              </Link>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-1">Sign Up For Free.</h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Find balance in your mind.
          </p>

          <form className="space-y-4 text-sm md:text-base">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter username ..."
                className="input input-bordered w-full border-brand-light focus:outline-none focus:border-brand"
              />
              <input
                type="text"
                placeholder="Enter full name ..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter email address ..."
                className="input input-bordered w-full"
              />
              <input
                type="password"
                placeholder="Enter password ..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 mt-3">
              <input type="checkbox" className="checkbox checkbox-sm mt-1" />
              <p className="text-sm text-gray-600">
                I accept the{" "}
                <Link to="#" className="text-brand hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and agree to the{" "}
                <Link to="#" className="text-brand hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Button */}
            <button className="btn bg-brand hover:bg-brand-dark text-white w-full mt-4 rounded-lg text-base">
              SIGN UP
            </button>
          </form>

          {/* Social sign-in */}
          <p className="text-center text-sm text-gray-500 mt-6">OR SIGN IN WITH:</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="btn btn-sm btn-circle">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="btn btn-sm btn-circle">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn btn-sm btn-circle">
              <i className="fab fa-google-plus-g"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
