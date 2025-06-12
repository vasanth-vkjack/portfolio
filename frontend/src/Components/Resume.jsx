import React from "react";
import resume_img from "../Assets/resume.jpg";

export const Resume = () => {
  const config = {
    link: "https://drive.google.com/file/d/11MGIwbfJsFnMW7iFjwIHO7hHIBJUt9tl/view?usp=drive_link",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={resume_img} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{" "}
            <a
              className="btn"
              target="_blank"
              href={config.link}
              rel="noreferrer"
            >
              {" "}
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
