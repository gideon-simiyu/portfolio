import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher"; // Assuming this is your custom theme switcher component

const Navbar = () => {
  const { pathname } = useLocation(); // Get the current route


  return (
    <nav className="hidden lg:block text-primary-900 dark:text-primary-300 bg-primary-300 dark:bg-primary-900 lg:bg-inherit lg:dark:bg-inherit sticky top-0 z-50">
      <div className="lg:container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          <a className="uppercase" href="#">
            Gideon Simiyu
          </a>
        </motion.div>

        {/* Navigation links */}
        <ul
          className="hidden lg:flex lg:space-x-8 items-start lg:items-center justify-start lg:justify-center lg:static lg:bg-transparent lg:w-auto lg:flex-row"
        >
          <motion.li
            className={`nav-link ${
              pathname === "/" ? "active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li
            className={`nav-link ${
              pathname.includes("projects") ? "active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/projects">Projects</Link>
          </motion.li>

          <motion.li
            className={`nav-link ${
              pathname.includes("about") ? "active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <Link className="text-nowrap" to="/about-me">About Me</Link>
          </motion.li>

          <motion.li
            className={`nav-link ${
              pathname.includes("contact") ? "active" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/contact">Hire Me</Link>
          </motion.li>
        </ul>

        {/* Theme switcher */}
        <div className="p-3">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
