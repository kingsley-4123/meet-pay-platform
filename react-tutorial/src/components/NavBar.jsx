import { useState } from 'react'
import GetStarted from './GetStarted';
import { NavLink} from 'react-router-dom';

const NavBar = () => { 
  
  const linkClass = ({isActive}) => isActive ? 
  'bg-white text-black rounded-md px-3 py-2 drop-shadow-md': 'text-white bg-blue-900 hover:bg-hover-blue rounded-md px-3 py-2';

  const [menuOPened, setMenuOpened] = useState(false);

  return (
    <section className='bg-gradient-to-b from-primary-blue to-dark-blue'>
      <nav className="relative container mx-auto p-6">
        {/* <!--flex container--> */}
      <div className="flex items-center justify-between">
        {/* <!--Logo--> */}
        <div className="pt-2 h-20 w-20 drop-shadow-md">
          <img src='/images/logo.png' alt="Manage" className='rounded-full' />
        </div>
        {/* <!-- Menu items--> */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/home" className={linkClass}>Home</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/sign-up" className={linkClass}>Sign-Up</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        </div>

         {/* <!-- Hamburger Icon --> */}
        <button onClick={() => setMenuOpened((prevState) => !prevState)}
         id="menu-btn" 
         className={`block hamburger md:hidden focus:outline-none ${menuOPened ? "open": ""}`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- mobile menu --> */}
      <div className="md:hidden">
        <div id="menu" className={`absolute flex-col items-center z-10 self-end py-8
        sm:self-center mt-10 space-y-6 font-bold bg-gray-200 sm:w-auto 
        left-6 right-6 drop-shadow-md ${menuOPened ? 'flex' : 'hidden'}`}>
          <NavLink to="/home" className={linkClass}>Home</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/sign-up" className={linkClass}>Sign-Up</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        </div>
      </div>
    </nav>
    </section>
    
  )
}

export default NavBar