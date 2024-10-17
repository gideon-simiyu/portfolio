import { motion } from "framer-motion"
import SkillsSwitcher from "../components/SkillSwitcher"
import { FiArrowDownCircle } from "react-icons/fi"

function Introduction() {
  return (
    <div className="px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center sm:flex-row mt-12 md:mt-2 justify-center w-screen"
      >
        {/* Left Text Section */}
        <motion.div
          className="basis-1/2 lg:basis-1/3  text-left max-w-xl"
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
            className="font-general-semibold text-nowrap text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-gradient uppercase"
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
              className="font-general-medium  text-primary bg-primary/10 flex justify-center items-center w-fit px-6 py-3 border border-primary shadow-lg rounded-lg hover:bg-primary hover:text-white focus:ring-1 focus:ring-primary backdrop-blur duration-300"
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
          className="basis-1/3 max-w-3xl text-right mt-12 sm:mt-0"
        >
          <img
            className="w-full object-cover"
            src="/images/developer-dark.svg"
            alt="Developer Dark Mode"
          />
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Introduction