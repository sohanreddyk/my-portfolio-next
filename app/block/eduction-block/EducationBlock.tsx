import React from "react";
import EducationCard from "./EducationCard";

const ContactBlock = () => {
  const details = [
    {
      imagePath: "/sit.jpg",
      degree: "Bachelor of Engineering",
      branch: "Artificial Intelligence and Data Science",
      duration: "2022 - 2025",
      college: "Siddaganga Institute Of Technology",
      CGPA: "A",
    },
    {
      imagePath: "/rit.jpg",
      degree: "Pre University",
      branch: "Science and Mathematics (PCMC)",
      duration: "2019 - 2021",
      college: "Expert Pre University College",
      CGPA: "9.73 CGPA",
    },
  ];

  return (
    <div className="dark:bg-[#0A0A0A] min-h-screen flex flex-col items-center font-inter px-4 py-6">
      <header className="w-full">
        <nav className="max-w-5xl mx-auto text-center">
          <span className="text-black dark:text-white text-3xl font-bold">
            Education
          </span>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
        {details.map((item, index) => (
          <EducationCard
            key={index}
            imagePath={item.imagePath}
            degree={item.degree}
            branch={item.branch}
            duration={item.duration}
            college={item.college}
            CGPA={item.CGPA}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactBlock;
