import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SkillsSwitcher() {
  const skills = [
    "Backend Web Developer",
    "Mobile App Developer",
    "Database Administrator",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting) {
      if (typedText.length < skills[currentSkillIndex].length) {
        typingTimeout = setTimeout(() => {
          setTypedText(skills[currentSkillIndex].substring(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        // Wait for a bit before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setTypedText(skills[currentSkillIndex].substring(0, typedText.length - 1));
        }, typingSpeed / 2); // Faster deletion speed
      } else {
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, currentSkillIndex]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.3,
      }}
      className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-relaxed text-gray-600 dark:text-gray-300"
    >
      A{" "}
      <span className="text-primary-600 dark:text-primary-400 ml-2">
        {typedText}
        <motion.span
          className="inline-block bg-primary-600 w-1 h-5 lg:h-8 -mb-1 ml-1"
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </span>
    </motion.p>
  );
}

export default SkillsSwitcher;
