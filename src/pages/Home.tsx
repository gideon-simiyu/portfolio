import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import SkillsSwitcher from "../components/SkillSwitcher";

function Home() {

  return (
    <div className="container mx-auto px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
      >
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Heading */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left dark:text-primary-400 text-primary-600 uppercase"
          >
            Hi, I am Gideon
          </motion.h1>

          <SkillsSwitcher />

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.7,
            }}
            className="flex justify-center sm:block mt-8"
          >
            <a
              download="Gideon-Simiyu-Resume.pdf"
              href="/files/Gideon-Simiyu-Resume.pdf"
              className="font-general-medium dark:bg-primary-800 dark:text-primary-300 text-primary-800 bg-primary-300 flex justify-center items-center w-fit px-6 py-3 border border-primary-600 shadow-lg rounded-lg hover:bg-primary-500 hover:text-white focus:ring-1 focus:ring-primary-900 transition-transform transform hover:scale-105 duration-300"
              aria-label="Download Resume"
              target="_blank"
            >
              <FiArrowDownCircle className="mr-2 h-6 w-6" />
              <span className="text-lg">Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full md:w-1/2 text-right mt-12 sm:mt-0"
        >
          <img
            className="hidden dark:block w-full"
            src="/images/developer-dark.svg"
            alt="Developer Dark Mode"
          />
          <img
            className="block dark:hidden w-full"
            src="/images/developer.svg"
            alt="Developer Light Mode"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
