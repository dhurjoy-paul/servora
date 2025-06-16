import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-white hover:text-blue-400";

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold text-white">
          Fixora
        </NavLink>
      </div>

      <div className="flex-none hidden md:flex gap-4">
        <NavLink to="/features" className={navLinkClass}>Features</NavLink>
        <NavLink to="/integrations" className={navLinkClass}>Integrations</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="text-white hover:text-blue-400 flex items-center gap-1">
            More <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
            <li><NavLink to="/team" className={navLinkClass}>Team</NavLink></li>
            <li><NavLink to="/careers" className={navLinkClass}>Careers</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
            <li><NavLink to="/help" className={navLinkClass}>Help Center</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="flex gap-2 ml-4">
        <NavLink to="/auth/login" className="btn btn-sm btn-ghost text-white">Log in</NavLink>
        <NavLink to="/signup" className="btn btn-sm btn-primary">Start free trial</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
