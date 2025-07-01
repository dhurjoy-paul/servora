import { lazy } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router';
const Count = lazy(() => import('./Count'))
const RightSide = lazy(() => import('./RightSide'))
const MarqueeUI = lazy(() => import('./ui/MarqueeUI'))

const Banner = () => {
  return (
    <section className="w-full min-h-fit pt-35 md:pt-45 pb-10 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left px-8 2xl:px-0">
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
                  d="M111.14 4.80617C106.893 4.80617 102.646 4.86135 98.3987 4.79112C94.9931 4.73593 91.5875 4.43995 88.177 4.40484C85.2295 4.37474 82.2621 4.38476 79.3345 4.6958C73.1855 5.34296 67.0664 6.30115 60.9125 6.90818C57.95 7.19915 55.0523 6.71253 52.1645 5.55868C47.4545 3.6774 42.5702 4.58543 37.7755 5.56871C34.9773 6.14061 32.2041 6.82791 29.4059 7.3647C26.9214 7.84129 24.7108 7.3948 22.6943 5.5938C20.6629 3.77774 18.044 4.22924 15.694 4.7861C12.2785 5.58877 8.93762 6.71754 5.57686 7.75099C3.47078 8.39814 1.56883 7.97173 0.284274 6.09547C-0.138934 5.47841 -0.0343748 4.27439 0.239465 3.48677C0.35398 3.15566 1.71819 2.8697 2.20613 3.13559C3.76453 3.98342 5.12875 3.4065 6.57761 2.97507C10.8396 1.70583 15.1115 0.346299 19.6273 0.732587C21.0911 0.858005 22.7541 1.19915 23.8893 2.03694C26.1945 3.74263 28.5645 3.42154 31.029 2.99512C35.2761 2.25766 39.5032 1.38978 43.7651 0.767707C46.9367 0.306168 50.0535 0.702485 53.1006 1.89145C56.9194 3.3764 60.9274 2.99513 64.8657 2.53861C71.4479 1.77607 77.9951 0.607165 84.5922 0.0703747C88.2367 -0.225612 91.951 0.501807 95.6404 0.597125C100.57 0.722543 105.504 0.652309 110.438 0.722543C112.982 0.757661 115.541 0.812849 118.065 1.10382C118.772 1.18409 119.803 2.03693 119.952 2.70416C120.256 4.04864 119.046 4.14396 118.041 4.19915C115.745 4.3346 113.45 4.48007 111.155 4.62556C111.155 4.68576 111.15 4.74596 111.145 4.80115L111.14 4.80617Z"
                  fill="#155dfc"
                />
              </svg>
            </span>
          </p>


          <Link to={`/services`} className='flex w-fit items-center gap-2 group mt-8'>
            <p className="bg-blue-600 text-white px-6 py-3 rounded-full group-hover:bg-blue-700 transition">
              Book a Service Now
            </p>
            <button className="flex items-center justify-center bg-blue-600 text-white size-12 rounded-full group-hover:bg-blue-700 transition">
              <FiArrowUpRight size={26} />
            </button>
          </Link>

          <Count />
        </div>

        <RightSide />
      </div>

      <MarqueeUI />
    </section>
  );
};

export default Banner;
