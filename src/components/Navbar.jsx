import { useCallback, useContext, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import '../styles/burger-menu.css';
// import { AuthContext } from '../contexts/AuthContext';
import { FaChevronDown, FaChevronUp, FaHome } from 'react-icons/fa';
import { FaFilePen } from 'react-icons/fa6';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { MdAssignmentAdd, MdCollectionsBookmark, MdLogin, MdLogout, MdManageAccounts } from 'react-icons/md';
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { AuthContext } from '../contexts/AuthContext';
import Heading from './Heading';
import NavMenu from './ui/NavMenu';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const ToastSuccess = () => (
    <span className='text-lg text-green-600 font-semibold font-poppins'>Logout Successful</span>
  );
  const ToastFailed = () => (
    <span className='text-lg text-red-600 font-semibold font-poppins'>Logout failed</span>
  );
  const notifySuccess = () => toast.success(<ToastSuccess />);
  const notifyFailed = () => toast.error(<ToastFailed />);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);

  const NAVBAR_HEIGHT = 80;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > NAVBAR_HEIGHT) {
      setIsVisible(false);
      setIsMenuOpen(false);
    } else if (currentScrollY < lastScrollY || currentScrollY <= NAVBAR_HEIGHT) {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, NAVBAR_HEIGHT]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
    if (!state.isOpen) {
      setShowDashboardSubMenu(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowDashboardSubMenu(false);
  };

  const toggleDashboardSubMenu = () => {
    setShowDashboardSubMenu(prev => !prev);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        notifySuccess();
        navigate('/');
        closeMenu();
      }).catch(error => { console.log(error); notifyFailed() })
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-brand whitespace-nowrap"
      : "hover:text-brand whitespace-nowrap";

  return (
    <>
      {/* Burger Menu for mobile and tablet */}
      <div className="md:hidden">
        <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}
          width={user ? 335 : 260} s>

          {/* Main Menu items */}
          <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `bm-item ${navLinkClass({ isActive })}`}>
            <div className='flex items-center gap-4'><FaHome className="inline-block text-2xl" /><span>Home</span></div>
          </NavLink>
          <NavLink onClick={closeMenu} to="/services" className={({ isActive }) => `bm-item ${navLinkClass({ isActive })}`}>
            <div className='flex items-center gap-4'><HiWrenchScrewdriver className="inline-block text-2xl" /><span>Services</span></div>
          </NavLink>

          {/* Dashboard Menu Item */}
          {
            user &&
            <div onClick={toggleDashboardSubMenu} className={`bm-item bm-dashboard-header ${showDashboardSubMenu ? 'active' : ''}`}>
              <div className='flex gap-4 items-center'>
                <TbLayoutDashboardFilled className="inline-block text-2xl" /> DashBoard
                {showDashboardSubMenu
                  ? (<FaChevronUp className="inline-block text-lg" />)
                  : (<FaChevronDown className="inline-block text-lg" />)
                }
              </div>
            </div>
          }

          {/* Dashboard Submenu */}
          {
            (user & showDashboardSubMenu) && (
              <ul className="bm-submenu-list">
                <li>
                  <NavLink onClick={closeMenu} to="/add-service" className={({ isActive }) => `bm-submenu-item ${navLinkClass({ isActive })}`}>
                    <div className='flex items-center gap-4'><MdAssignmentAdd className="inline-block text-2xl" /><span>Add Service</span></div>
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeMenu} to="/manage-service" className={({ isActive }) => `bm-submenu-item ${navLinkClass({ isActive })}`}>
                    <div className='flex items-center gap-4'><MdManageAccounts className="inline-block text-2xl" /><span>Manage Services</span></div>
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeMenu} to="/booked-service" className={({ isActive }) => `bm-submenu-item ${navLinkClass({ isActive })}`}>
                    <div className='flex items-center gap-4'><MdCollectionsBookmark className="inline-block text-2xl" /><span>Booked-Service</span></div>
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeMenu} to="/service-to-do" className={({ isActive }) => `bm-submenu-item ${navLinkClass({ isActive })}`}>
                    <div className='flex items-center gap-4'><FaFilePen className="inline-block text-2xl" /><span>Service-To-Do</span></div>
                  </NavLink>
                </li>
              </ul>
            )
          }
        </Menu>
      </div>

      {/* Main Navbar */}
      <div className={`w-full h-min top-0 z-50 fixed transition-transform duration-300 ease-in-out py-2
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      >
        <div className="flex items-center px-4 xl:px-0 py-2 md:py-2 max-w-7xl mx-auto">
          <div className="navbar-start">
            <Link to='/' className="flex items-center gap-2 cursor-pointer group">
              <Heading />
            </Link>
          </div>

          <div className="flex items-center navbar-center gap-2">

            <NavMenu user={user} />
          </div>
          <div className='navbar-end justify-end mr-14 md:mr-0'>
            {user
              ? (<Link onClick={handleSignOut}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-semibold rounded-lg px-5 py-2 flex justify-center items-center gap-2">
                <MdLogout size={22} /> Logout
              </Link>)
              : (<Link to={`/auth/login`}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-semibold rounded-lg px-5 py-2 flex justify-center items-center gap-2">
                <MdLogin size={22} /> Login
              </Link>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;