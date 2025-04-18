import React from "react";
import Image from "next/image";

const AboutBlock = () => {
  return (
    <div className="min-h-screen px-4 md:px-16 py-10 bg-white dark:bg-[#0A0A0A]  text-black dark:text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#f6e5c8] inline-block">
          About
        </h2>
      </div>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
        {/* Left Card */}
        <div className=" rounded-2xl p-6 shadow-md dark:shadow-white w-full lg:w-[390px] flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4">
            <Image
              src="/profile.JPG"
              alt="Sohan Reddy"
              fill
              className="rounded-full object-cover border-4 border-[#f6e5c8]"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Jagadis</h3>
          <ul className="text-left space-y-2 text-sm">
            <li>
              <span className="font-semibold">› Birthday:</span> July 2000
            </li>
            <li>
              <span className="font-semibold">› Phone:</span>{" "}
              <a
                href="tel:+917349269873"
                className=" text-black dark:text-white underline hover:text-orange-400"
              >
                +91 7349269873
              </a>
            </li>
            <li>
              <span className="font-semibold">› City:</span>{" "}
              <span id="location" className=" text-black dark:text-white">
                Bangalore, India
              </span>
            </li>
            <li>
              <span className="font-semibold">› Email:</span>{" "}
              <a
                href="mailto:sohan_reddy@outlook.com"
                className=" text-black dark:text-white underline hover:text-orange-400"
              >
                sohan_reddy@outlook.com
              </a>
            </li>
          </ul>
          {/* Push bottom if space */}
          <div className="flex-grow" />
        </div>

        {/* Right Card */}
        <div className=" rounded-2xl p-6 shadow-md w-full flex flex-col justify-between dark:shadow-white">
          <p className="leading-relaxed px-4 text-[15px] md:text-base text-justify">
            <strong>Greetings,</strong>
            <br />
            <br />I am Jagadish C K, a driven and innovative Information Science
            engineer with a burgeoning expertise in with expertise in web
            development. My academic foundation, cultivated at Siddaganga
            Institute of technology, serves as the bedrock for my proficiency in
            a diverse array of technologies. This portfolio offers a
            comprehensive overview of my capabilities, encompassing robust web
            development skills—leveraging the Full stack—alongside a strong
            command of core programming languages, notably C++ and Python. I am
            passionate about crafting elegant, efficient solutions and
            continuously expanding my knowledge horizon within the dynamic realm
            of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
