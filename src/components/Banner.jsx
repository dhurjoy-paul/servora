import { lazy, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Count = lazy(() => import('./Count'));
const RightSide = lazy(() => import('./RightSide'))
const MarqueeUI = lazy(() => import('./ui/MarqueeUI'))

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full min-h-fit pt-35 md:pt-45 pb-12 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left px-8 2xl:px-0"
        >
          <h1 className="text-[2.1rem] md:text-[2.75rem] items-start font-bold leading-tight">
            <span className="text-4xl md:text-5xl text-brand font-ibm font-bold italic">Home tasks?</span> <br /> Our experts have it covered.
          </h1>
          <p className="text-para max-w-full mx-auto lg:mx-0 relative inline-block">
            Connect with trusted home service experts—from repairs to cleaning—all in one place. Hire professionals, get tasks done, and enjoy hassle-free help at your <span className="relative inline-block"> doorsteps.
              <svg
                className="absolute left-0 -bottom-[6px] w-full h-[9px]"
                viewBox="0 0 120 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M111.14 4.80617C106.893..."
                  fill="#155dfc"
                />
              </svg>
            </span>
          </p>

          <Link to={`/services`} className='flex w-fit items-center gap-2 group mt-8'>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full group-hover:bg-blue-700 transition"
            >
              Book a Service Now
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center bg-blue-600 text-white size-12 rounded-full group-hover:bg-blue-700 transition"
            >
              <FiArrowUpRight size={26} />
            </motion.button>
          </Link>

          <Count />
        </motion.div>

        <RightSide />
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <MarqueeUI />
      </motion.div>
    </section>
  );
};

export default Banner;
