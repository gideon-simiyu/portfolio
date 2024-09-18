import { motion } from "framer-motion";
import use4ColorScheme from "../hooks/useColorScheme";

function ThemeSwitcher() {
  const {theme, setTheme} = use4ColorScheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-x-2 py-2 px-3 bg-primary-300 dark:bg-primary-800 rounded-full font-semibold text-primary-600 dark:text-primary-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-400"
      aria-label={`Switch to ${theme == "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme == "dark" ? "dark" : "light"}
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        className="shrink-0"
      >
        {theme == "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        )}
      </motion.div>
      <span className="hidden lg:block">{theme == "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeSwitcher;
