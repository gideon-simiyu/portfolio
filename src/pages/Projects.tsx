

function Projects() {
  const projects = [
    {
      title: "Threads & Trends",
      description:
        "An online clothing store built with Laravel and React using Inertia.js. This project combines the power of Laravel's backend capabilities with the dynamic and responsive UI provided by React, creating a seamless shopping experience.",
      image: "threads_trends.png",
      link: "https://wandabi.freewebhostmost.com",
    },
    {
      title: "Studyhive",
      description:
        "An innovative group-based online learning platform built with Django. Studyhive provides a personalized and engaging learning experience by recommending content based on student interests and group activities, fostering collaborative learning.",
      image: "studyhive.png",
      link: "https://github.com/wandabi-gs/studyhive",
    },
    {
      title: "GCommerce",
      description:
        "An electronics e-commerce platform developed with Django, offering a sleek interface and robust backend for managing products, users, and transactions. GCommerce aims to deliver a smooth, efficient shopping experience for tech enthusiasts.",
      image: "gcommerce.png",
      link: "https://github.com/wandabi-gs/online-djngo-store",
    },
    {
      title: "Connectify",
      description:
        "A simple social media application built on the MERN stack (MongoDB, Express, React, Node.js). Connectify allows users to connect, share updates, and interact in real-time. It features user authentication, post creation, and live feeds.",
      image: "connectify.png",
      link: "https://github.com/wandabi-gs/online-djngo-store",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <div className="sm:max-w-sm p-5 flex flex-col">
          <div key={index} className="card flex-grow bg-secondary/10 ">
            {/* <figure>
              <img
                src={`/images/${project.image}`}
                alt={project.title}
              />
            </figure> */}
            <div className="card-body">
              <h5 className="card-title mb-2.5 uppercase text-primary">{project.title}</h5>
              <p className="mb-4">{project.description}</p>
              <div className="card-actions">
                <a href={project.link} target="_blank" className="btn btn-secondary text-base-content">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
