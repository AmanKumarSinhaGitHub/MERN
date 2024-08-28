import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-gray-800 shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              <Link to="/">Aman</Link> 
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                  }
                >
                  Register
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-blue-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-gray-800 md:hidden">
          <ul className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                }
              >
                Register
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-blue-400" : "text-gray-300"} hover:text-blue-400`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
