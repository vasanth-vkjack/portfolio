import React from "react";
import ecom_img from "../Assets/ecom.png";
import kalvi_img from "../Assets/kalvi.png";
import todo_img from "../Assets/to_do.png";

export const Projects = () => {
  const config = {
    projects: [
      {
        image: ecom_img,
        description: "A Ecommerce Website. Built with MERN Stack.",
        link: "https://ecommercefrntend.netlify.app",
      },
      {
        image: todo_img,
        description: "Todo-App",
        link: "https://todoapp9025.netlify.app",
      },
      {
        image: kalvi_img,
        description:
          "IT Training Insitiute website with dynamic route, Built with React",
        link: "https://github.com/vasanth-vkjack/portfolio.git",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with
            React.js, Node.js, Express and MongoDB. Check them out
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative">
              <img
                className="md:h-[250px] h-[200px] w-[500px]"
                src={project.image}
                alt=""
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a
                    className="btn"
                    target="_blank"
                    href={project.link}
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
