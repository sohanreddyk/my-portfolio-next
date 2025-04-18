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
          <h3 className="text-xl font-bold mb-2">Sohan Reddy</h3>
          <ul className="text-left space-y-2 text-sm">
            <li>
              <span className="font-semibold">› Birthday:</span> November 2002
            </li>
            <li>
              <span className="font-semibold">› Phone:</span>{" "}
              <a
                href="tel:+919591473430"
                className=" text-black dark:text-white underline hover:text-orange-400"
              >
                +91 9591473430
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
            <br />I am SOHAN, a driven and innovative Artificial Intelligence
             and Data Science, fueled by a passion for building impactful tech
             solutions. My academic journey at Siddaganga Institute of 
             Technology, combined with hands-on experience across industry and 
             research, has shaped me into a versatile developer with strong 
             expertise in full-stack web development, mobile app design, and 
             intelligent systems. Whether its creating a high-efficiency stock
             prediction platform, developing cloud-based tools, or publishing 
             cutting-edge research on quantum learning, I approach every project 
             with curiosity, creativity, and precision. This portfolio is a reflection 
             of my growth, showcasing my ability to merge design, development, and 
             data into elegant, scalable solutions as I continue to explore the 
             ever-evolving world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
