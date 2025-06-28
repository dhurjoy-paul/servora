import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';
import CircularText from './animations/CircularText';
import FooterContact from './ui/FooterContact'

const Footer = () => {
  return (
    <footer>
      <div className='bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text border-t border-t-sky-400 dark:border-t-blue-600'>
        <div className="footer sm:footer-horizontal max-w-7xl mx-auto px-16 xl:px-0 py-20">

          <aside className='flex gap-7 justify-center items-center'>
            <div className='relative'>
              <CircularText
                text="SERVORA * SERVORA * "
                onHover="pause"
                spinDuration={20}
                radius={0}
                letterSpacingDeg={18}
              />
              <img className="w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="favicon.jpg" alt="Servora (Image not found)" />
            </div>
            <p className='flex flex-col -gap-1 text-xl font-bold font-funnel-display'>
              <span>Skilled Experts.</span>
              <span>Anytime,</span>
              <span>Anywhere.</span>
            </p>
          </aside>

          <FooterContact />

          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <Link to='https://www.facebook.com/dhurjoy.dev/' target='_blank' className='hover:text-brand'><FaFacebook size={28} /> </Link>
              <Link to='https://github.com/dhurjoy-paul' target='_blank' className='hover:text-brand'> <FaGithub size={28} /> </Link>
              <Link to='https://www.linkedin.com/' target='_blank' className='hover:text-brand'> <FaLinkedin size={28} /> </Link>
            </div>
          </nav>

        </div>
      </div>

      <div className="footer sm:footer-horizontal footer-center font-funnel-display text-base font-medium bg-sky-100 text-sky-700 dark:bg-blue-950 dark:text-blue-100 p-4 border-y dark:border-y-0 border-y-sky-400 dark:border-y-blue-600">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Servora Ltd.</p>
      </div>
    </footer>
  )
}

export default Footer