function Skills() {
  const skills = [
    {
      title: "Backend Web Development",
      description:
        "Proficient in building scalable and robust backend systems with Node.js, Express, Django, and Laravel. Experienced in developing RESTful APIs, managing server-side logic, and implementing authentication and security measures. Adept at using Tailwind CSS for responsive, streamlined UI designs within full-stack projects.",
    },
    {
      title: "Database Administration",
      description:
        "Skilled in managing and optimizing databases with MySQL, MariaDB, and MongoDB. Capable of designing efficient data models, performing query optimization, and implementing backup and recovery strategies to ensure data integrity and availability.",
    },
    {
      title: "Mobile App Development",
      description:
        "Experienced in developing cross-platform mobile applications with Flutter, focusing on creating smooth, user-friendly interfaces. Proficient in managing state effectively, integrating with APIs and Firebase, and crafting applications that prioritize performance and intuitive design.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <div key={index} className="sm:max-w-sm p-3 flex flex-col">
          <div className="card bg-secondary/10 flex-grow">
            <div className="card-body">
              <h5 className="card-title mb-2.5 text-primary uppercase">{skill.title}</h5>
              <p className="mb-4">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
