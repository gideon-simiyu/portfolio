import { motion } from "framer-motion";

function AboutMe() {
  // Define bounce animation keyframes
  const bounceAnimation = {
    animate: {
      y: [0, -10, 0, 10, 0], // Adjust these values for bounce height
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Define fade-in animation keyframes
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const Skill = ({ category, skills }) => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={skillVariants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="p-4"
    >
      <p className="text-lg text-gray-600 dark:text-gray-300">
        <strong className="text-primary-900 dark:text-primary-300">{category}:</strong> {skills}
      </p>
    </motion.div>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center mb-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I’m a{" "}
          <strong className="text-primary-900 dark:text-primary-300">
            Computer Science graduate
          </strong>{" "}
          from Maseno University. I’m a versatile{" "}
          <strong className="text-primary-900 dark:text-primary-300">
            software developer{" "}
          </strong>
          specializing in web and mobile app development, as well as{" "}
          <strong className="text-primary-900 dark:text-primary-300">
            database administration{" "}
          </strong>
          . Currently, I’m freelancing, helping clients bring their tech
          projects to life.
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-primary-800 dark:text-primary-300">
          Education
        </h2>
        <ul className="mt-4 space-y-2">
          {[
            {
              type: "University Education",
              period: "Nov 2020 - Apr 2024",
              institution: "Maseno University",
              degree: "Computer Science Graduate",
            },
            {
              type: "Secondary School",
              period: "Feb 2016 - Nov 2019",
              institution: "St. Teresa's Bikeke Boys High School",
              degree: "B+ in KCSE",
            },
            {
              type: "Primary School",
              period: "Jan 2008 - Nov 2015",
              institution: "Bikeke Primary School",
              degree: "352 marks in KCPE",
            },
          ].map(({ period, institution, degree, type }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-4 flex flex-col lg:flex-row rounded-lg bg-primary-400 dark:bg-primary-900"
            >
              <div className="flex flex-col lg:basis-1/2 mb-4 lg:mb-0 lg:pr-4">
                <strong className="text-primary-800 dark:text-primary-300">
                  {type}
                </strong>
                <span className="text-gray-700 dark:text-gray-400">
                  {period}
                </span>
              </div>
              <div className="flex flex-col lg:basis-1/2">
                <strong className="text-primary-800 dark:text-primary-300">
                  {institution}
                </strong>
                <span className="text-gray-700 dark:text-gray-400">
                  {degree}
                </span>
              </div>
            </motion.div>
          ))}
        </ul>
      </motion.section>

      {/* Professional Experience Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="my-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-primary-800 dark:text-primary-300">
          Professional Experience
        </h2>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="my-12"
        >
          <h3
            className="text-xl font-semibold text-gray-900 dark:text-white"
            {...bounceAnimation}
          >
            Current Role
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Freelancing to develop and maintain software solutions. Expertise in
            web and mobile development, and database management.
          </p>
          <h3
            className="text-xl font-semibold text-gray-900 dark:text-white mt-6"
            {...bounceAnimation}
          >
            Past Experience
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Interned at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 underline"
              href="https://kplc.co.ke/"
            >
              Kenya Power and Lighting Company
            </a>{" "}
            (May 2023 - Nov 2023), working on system maintenance, domain
            management, software development, and IT support.
          </p>
        </motion.section>
      </motion.section>

      {/* Skills Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="my-12 border-2 border-primary-400 dark:border-primary-800 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-center text-primary-800 dark:text-primary-300">
            Skills
          </h2>
          <div className="mt-4 space-y-2">
            <Skill
              category="Languages"
              skills="Python, Java, PHP, JavaScript, TypeScript"
            />
            <Skill
              category="Frameworks"
              skills="Laravel, Django, Flutter, Node.js, Express, React"
            />
            <Skill
              category="Databases"
              skills="MariaDB, MySQL, PostgreSQL, MongoDB, SQLite3"
            />
            <Skill
              category="SaaS"
              skills="PocketBase, Firebase"
            />
            <Skill
              category="Other Skills"
              skills="Git, Docker"
            />
          </div>
        </motion.section>
    </div>
  );
}

export default AboutMe;
