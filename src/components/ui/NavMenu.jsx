import { NavLink } from "react-router";

const NavMenu = ({ user }) => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-brand whitespace-nowrap"
      : "hover:text-brand whitespace-nowrap";

  return (
    <div className="flex-none font-semibold hidden md:flex gap-9 text-text">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/services" className={navLinkClass}>Services</NavLink>

      {user &&
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="flex items-center gap-1 hover:text-brand">
            Dashboard <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-menu rounded-box">
            <li><NavLink to="/add-services" className={navLinkClass}>Add Service</NavLink></li>
            <li><NavLink to="/manage-services" className={navLinkClass}>Manage Service</NavLink></li>
            <li><NavLink to="/booked-service" className={navLinkClass}>Booked-Service</NavLink></li>
            <li><NavLink to="/service-to-do" className={navLinkClass}>Service-To-Do</NavLink></li>
          </ul>
        </div>
      }
    </div>
  )
}
export default NavMenu