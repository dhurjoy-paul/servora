import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { HiOutlineMail, HiOutlinePhotograph, HiOutlineUser } from "react-icons/hi";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import RegisterLottie from "../assets/register.json";
import GoogleLogin from "../components/GoogleLogin";
import AutoPwd from "../components/ui/AutoPwd";
import { AuthContext } from "../contexts/AuthContext";
import validate from "../utils/validate";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // state management
  const [pwd, setPwd] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // toast notifications
  const notifySuccess = () => toast.success(<ToastSuccess />);
  const notifyFailed = (error) => toast.error(<ToastFailed error={error} />);
  const notifyInvalid = () => toast.error(<ToastInvalid />);

  const ToastSuccess = () => (
    <span className='text-lg text-green-600 font-semibold font-poppins'>Registration successful</span>
  );
  const ToastFailed = ({ error }) => (
    <div className='font-semibold font-poppins'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-poppins'>Registration failed</span>
      </div>
      <p>{error}</p>
    </div>
  );
  const ToastInvalid = () => (
    <div className='font-semibold font-poppins'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-poppins'>Registration failed</span>
      </div>
      <p>Email already in use</p>
    </div>
  );

  const handlePassChange = (e) => {
    const value = e.target.value;
    setPwd(value);
    setErrors(validate(value));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...userInfo } = Object.fromEntries(formData.entries());
    const { name, email, photo } = userInfo;

    setSuccessMsg(false);
    setError(false);
    setErrorMsg('');

    if (errors.length > 0 || pwd.length === 0) { return }

    createUser(email, password)
      .then((result) => {
        const uid = result.user.uid;
        const userProfile = {
          ...userInfo, uid,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // remove this if saving it on DB
        notifySuccess();
        navigate(from);

        // Save user to DB
        // fetch('https://ph-assignment-10-server-nu.vercel.app/users', {
        //   method: 'POST',
        //   headers: { 'content-type': 'application/json' },
        //   body: JSON.stringify(userProfile),
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     if (data.insertedId) {
        //       const profile = { displayName: name, photoURL: photo };

        //       updateProfile(auth.currentUser, profile)
        //         .then(() => {
        //           setUser({ ...auth.currentUser });
        //           notifySuccess();
        //           navigate(from);
        //         })
        //         .catch(err => {
        //           console.error('Profile update error:', err);
        //           notifySuccess();
        //           navigate(from);
        //         });
        //     }
        //   });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(true);
        setErrorMsg(errorMessage);

        console.log('Email-Password Register Error:', error);
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          notifyInvalid();
        } else {
          notifyFailed(errorMessage);
        }
      });
  };

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
          <form onSubmit={handleRegister} className="text-lg">
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
                <input type="url" name='photo' className="text-black dark:text-[#f4fbff]" placeholder="Enter your photo URL ..." required />
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

            <AutoPwd onChange={handlePassChange} value={pwd} errors={errors} pwd={pwd} />

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
