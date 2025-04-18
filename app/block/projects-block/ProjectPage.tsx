import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const details = [
    {
      imagePath: "/hackernews.jpg",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/sohanreddyk/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      imagePath: "/filelessMalware.png",
      title: "Safety Helmet Detection",
      projectUrl: "https://github.com/jswaroop123/FileLess_Malware",
      description:
        "Developed ML model using YOLOv5 + Streamlit to detect Safety Helmet",
    },
    {
      imagePath: "/swiggy.jpg",
      title: "Resume Builder",
      projectUrl: "https://github.com/sohanreddyk/resumebuilder",
      description:
        "Developed an AI-powered Resume Builder using React + TailwindCSS",
    },
    {
      imagePath: "/colonCancer.jpg",
      title: "PL-Prediction",
      projectUrl:
        "https://github.com/sohanreddyk/PL-prediction",
      description: "Developed a Premier League Match Prediction System",
    },
    {
      imagePath: "/cpuSchedule.jpg",
      title: "CPU Schedule Visualizer",
      projectUrl:
        "https://github.com/jagadish018/CPU-Scheduler-Algo-Visualizer",
      description: "Developed Algorithm visualizer using React + TailwindCSS",
    },
    {
      imagePath: "/Hono.jpg",
      title: "Hono Clone",
      projectUrl: "https://github.com/jagadish018/hackernews-server",
      description: "Developed Hono clone Web Framework  ",
    },
  ];

  return (
    <div className="dark:bg-[#0A0A0A] min-h-screen font-inter px-4 py-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Projects
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {details.map((item, index) => (
          <ProjectCard
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
