import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="bg-white text-lg">
        <ul className="flex font-medium">
          <li className="m-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2  ${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="m-3">
            <NavLink
              to="about"
              className={({ isActive }) =>
                `py-2  ${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              About
            </NavLink>
          </li>

          <li className="m-3">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `py-2  ${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
