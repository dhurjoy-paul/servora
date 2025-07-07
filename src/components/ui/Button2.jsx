import { Link } from 'react-router';

const Button2 = ({ label, onClick, icon, bg, type, to }) => {
  const commonClasses = "relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-base-200 rounded-xl hover:bg-base-200 border border-dashed hover:border-solid hover:border-amber-400 group";
  const innerSpan = (
    <>
      <span className="size-[23rem] rounded rotate-[-31deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full flex items-center justify-center gap-2 text-base-content transition-colors duration-300 ease-in-out group-hover:text-black">
        <div className={`transition-transform duration-300 ease-in-out group-hover:-translate-x-1 ${bg === true ? 'bg-btn-text p-[2px] rounded-full' : ''}`}>
          {icon}
        </div>
        {label}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={commonClasses} onClick={onClick}>
        {innerSpan}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={commonClasses}>
      {innerSpan}
    </button>
  );
}

export default Button2
