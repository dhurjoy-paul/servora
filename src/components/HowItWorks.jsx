import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import DecryptedText from './animations/DecryptedText';

const steps = [
  {
    img: "https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198090/find_pnhata.png",
    title: "Find Service",
    desc: "Choose from trusted home service categories",
    aos: "fade-up-right",
  },
  {
    img: "https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198089/booking_gwjbjm.png",
    title: "Book Easily",
    desc: "Schedule at your convenience with just a few taps",
    aos: "fade-up",
  },
  {
    img: "https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198091/mentor_sbl0zw.png",
    title: "Get Expert Help",
    desc: "A professional visits your location and solves your issue",
    aos: "fade-up",
  },
  {
    img: "https://res.cloudinary.com/dnxdrwrom/image/upload/v1753198093/relaxation_ceqvpw.png",
    title: "Rate & Relax",
    desc: "Pay securely and leave a rating—it’s that simple!",
    aos: "fade-up-left",
  },
];

const HowItWorks = () => {
  const [hoverStates, setHoverStates] = useState(Array(steps.length).fill(false));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleHover = (index, value) => {
    setHoverStates(prev => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
  };

  return (
    <section className="pt-8 pb-16 lg:py-16 bg-white dark:bg-[#0f0e0e] text-text">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Servora Works – <span className="text-brand font-funnel-display">Fast, Easy, Reliable</span>
        </h2>
        <p className="text-para max-w-2xl mx-auto mb-12">
          In just a few steps, get expert help at your doorstep.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {steps.map((step, index) => (
            <Link to={'/services'}
              key={index}
              className="relative group w-full max-w-sm cursor-pointer hover:scale-102 transition-all duration-300 mx-auto"
              data-aos={step.aos}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-light" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D3E1FA" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                  <linearGradient id="gradient-dark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                <path fill="url(#gradient-light)"
                  className="stroke-gray-300 dark:stroke-gray-500 stroke-0 fill-[url(#gradient-light)] dark:fill-[url(#gradient-dark)] group-hover:stroke-brand transition-all duration-300"
                  d="M6 3 72.876 3.206A3 3 0 0176.256 5.685L79.637 16.728A3 3 0 0082.5 18.5L94 18.5A3 3 0 0197 21.5L97 94A3 3 0 0194 97L6 97A3 3 0 013 94L3 6A3 3 0 016 3Z"
                />
              </svg>

              <p className='absolute top-[10px] right-5 border-2 bg-[#D3E1FA]/70 dark:bg-[#1f2937] border-[#d3e1fa] dark:border-[#1f2937] group-hover:bg-brand group-hover:border-brand text-text group-hover:text-white transition-all duration-300 aspect-square w-7 rounded-full flex justify-center items-center font-funnel-display font-semibold'>
                {index + 1}
              </p>

              <div className="relative px-5 py-10 flex flex-col justify-center items-center gap-1">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img src={step.img} alt={step.title} className="w-full h-20 object-contain mx-auto" />
                </div>
                <DecryptedText
                  text={step.title}
                  trigger={hoverStates[index]}
                  className="text-lg font-funnel-display font-semibold text-center"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{step.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
