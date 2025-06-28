import { useRef, useState } from 'react';

const ContactUs = () => {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const phoneTimeout = useRef(null);
  const emailTimeout = useRef(null);

  const phoneNumber = '+8801512-345678';
  const emailAddress = 'supports@servora.com';

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText('');
    }, 2000);
  };

  const handleMouseEnter = (type) => {
    if (type === 'phone') {
      clearTimeout(phoneTimeout.current);
      setShowPhoneTooltip(true);
    } else {
      clearTimeout(emailTimeout.current);
      setShowEmailTooltip(true);
    }
  };

  const handleMouseLeave = (type) => {
    if (type === 'phone') {
      phoneTimeout.current = setTimeout(() => {
        setShowPhoneTooltip(false);
      }, 100);
    } else {
      emailTimeout.current = setTimeout(() => {
        setShowEmailTooltip(false);
      }, 100);
    }
  };

  return (
    <div>
      <h6 className="footer-title">Contact Us</h6>
      <div className='flex flex-col gap-1 text-base font-funnel-display font-bold'>

        {/* PHONE */}
        <p className="relative w-max">
          Phone:
          <span
            className='hover:text-brand hover:underline underline-offset-3 font-medium cursor-pointer ml-1'
            onMouseEnter={() => handleMouseEnter('phone')}
            onMouseLeave={() => handleMouseLeave('phone')}
          >
            <a href={`tel:${phoneNumber}`} target='_blank' rel="noopener noreferrer">{phoneNumber}</a>
          </span>

          {showPhoneTooltip && (
            <div
              onClick={() => handleCopy(phoneNumber)}
              onMouseEnter={() => handleMouseEnter('phone')}
              onMouseLeave={() => handleMouseLeave('phone')}
              className="absolute -top-6 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 cursor-pointer z-10"
            >
              {copiedText === phoneNumber ? 'Copied!' : 'Click to copy'}
            </div>
          )}
        </p>

        {/* EMAIL */}
        <p className="relative w-max">
          Mail:
          <span
            className='hover:text-brand hover:underline underline-offset-3 font-medium cursor-pointer ml-1'
            onMouseEnter={() => handleMouseEnter('email')}
            onMouseLeave={() => handleMouseLeave('email')}
          >
            <a href={`mailto:${emailAddress}`} target='_blank' rel="noopener noreferrer">{emailAddress}</a>
          </span>

          {showEmailTooltip && (
            <div
              onClick={() => handleCopy(emailAddress)}
              onMouseEnter={() => handleMouseEnter('email')}
              onMouseLeave={() => handleMouseLeave('email')}
              className="absolute -bottom-6 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 cursor-pointer z-10"
            >
              {copiedText === emailAddress ? 'Copied!' : 'Click to copy'}
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
