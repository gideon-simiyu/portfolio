import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiPhone, FiTool, FiUser } from "react-icons/fi";

function MobileNavbar() {
  const [activeTab, setActiveTab] = useState("home");
  const pathname = useLocation().pathname;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (pathname == "/") {
      setActiveTab("home");
    } else {
      const path = pathname.split("/");
      setActiveTab(path[1]);
    }
  }, [pathname]);

  return (
    <nav className="fixed z-50 bottom-0 left-0 bg-primary-400 dark:bg-primary-900 w-screen lg:hidden h-16">
      <div className="flex justify-around items-center h-full">
        <button
          className={`flex gap-2 flex-1 text-center justify-center items-center h-full py-2 ${activeTab === "home" ? "dark:text-primary-400 text-primary-800  font-semibold" : "text-white"}`}
        >
          <FiHome />
          <Link to="/">Home</Link>
        </button>
        <button
          className={`flex gap-2 flex-1 text-center justify-center items-center h-full py-2 ${activeTab === "about-me" ? "dark:text-primary-400 text-primary-800  font-semibold" : "text-white"}`}
        >
          <FiUser />
          <Link to="/about-me">About Me</Link>
        </button>
        <button
          className={`flex gap-2 flex-1 text-center justify-center items-center h-full py-2 ${activeTab === "projects" ? "dark:text-primary-400 text-primary-800  font-semibold" : "text-white"}`}
        >
          <FiTool />
          <Link to="/projects">Projects</Link>
        </button>
        <button
          className={`flex gap-2 flex-1 text-center justify-center items-center h-full py-2 ${activeTab === "contact" ? "dark:text-primary-400 text-primary-800  font-semibold" : "text-white"}`}
        >
        <FiPhone />
          <Link to="/contact">Hire Me</Link>
        </button>
      </div>
    </nav>
  );
}

export default MobileNavbar;
