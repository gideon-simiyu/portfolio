import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission, e.g., send the data to a server
    console.log("Form data submitted:", formData);
  };

  // Define fade-in animation keyframes for the contact details
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto p-4">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center mb-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-primary-800 dark:text-primary-300">
          Hire Me
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          If you’re interested in collaborating with me on a project or
          have any questions, feel free to reach out. I’m available for
          freelance work and consulting opportunities.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center my-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-300">
          Contact Information
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> <a href="mailto:gwandabi23@gmail.com" className="text-primary-600 dark:text-primary-400 underline">gwandabi23@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Phone:</strong> <a href="tel:+254712881672" className="text-primary-600 dark:text-primary-400 underline">+254 712 881 672</a>
          </p>
        </div>
      </motion.section>


      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="my-12 border-2 border-primary-400 dark:border-primary-800 p-4 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-primary-800 dark:text-primary-300">
          Hire Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-2 max-w-lg mx-auto p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary-800 dark:border-primary-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary-800 dark:border-primary-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="workType" className="block text-gray-700 dark:text-gray-300 mb-2">
              Type of Work
            </label>
            <input
              type="text"
              id="workType"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary-800 dark:border-primary-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-primary-800 dark:border-primary-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-800 dark:bg-primary-400 text-white p-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-300 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </div>
  );
}

export default Contact;
