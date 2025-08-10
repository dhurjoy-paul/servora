import { FaFilePen } from "react-icons/fa6";
import { MdAssignmentAdd, MdCollectionsBookmark, MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router";

const NavMenu = ({ user }) => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-brand whitespace-nowrap"
      : "hover:text-brand whitespace-nowrap";

  return (
    <div className="flex-none font-semibold hidden nav:flex gap-10 text-text text-xl">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/services" className={navLinkClass}>Services</NavLink>

      {user &&
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="flex items-center gap-1 hover:text-brand">
            Dashboard <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-menu rounded-lg text-lg">
            <li><NavLink to="/add-service" className={navLinkClass}><div className='flex items-center gap-2'><MdAssignmentAdd className="inline-block" /><span>Add Service</span></div></NavLink></li>
            <li><NavLink to="/manage-services" className={navLinkClass}><div className='flex items-center gap-2'><MdManageAccounts className="inline-block" /><span>Manage Services</span></div></NavLink></li>
            <li><NavLink to="/booked-services" className={navLinkClass}><div className='flex items-center gap-2'><MdCollectionsBookmark className="inline-block" /><span>Booked-Service</span></div></NavLink></li>
            <li><NavLink to="/service-to-do" className={navLinkClass}><div className='flex items-center gap-2'><FaFilePen className="inline-block" /><span>Service-To-Do</span></div></NavLink></li>
          </ul>
        </div>
      }

      <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>
      <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>

    </div>
  )
}
export default NavMenu