"use client";

import Image from "next/image";
import React from "react";

const ExperienceCard: React.FC = () => {
  return (
    <div className="bg-transparent dark:bg-neutral min-h-screen flex items-center justify-center p-6">
      <div className="flex w-full max-w-5xl relative">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black  dark:bg-white -translate-x-1/2 z-0" />

        {/* Timeline Icon in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-25 h-20 rounded-full border border-white bg-[#2e2b3c] flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/stacklane.png" // Change this to your own logo if you have one
                alt="Project Logo"
                width={30}
                height={10}
                className="object-contain rounded-full"
              />
              
              <h4 className="text-white">stacklane</h4>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="w-1/2 flex justify-end pr-6 md:pr-20 z-10">
          <div className="relative bg-[#2e2b3c] text-white rounded-md p-6 max-w-md shadow-[0_2px_0_0_rgba(255,255,255,0.3)]">
            {/* Triangle Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-l-[12px] border-l-[#2e2b3c]" />
            <p className="font-semibold mb-1">Full Stack Developer</p>
            <p className="font-mono text-sm mb-4">
              Food Ordering System – Personal Project
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-normal">
              <li>
                Built a responsive UI using React and Tailwind CSS for seamless
                food ordering.
              </li>
              <li>
                Developed a secure backend using Hono, Node.js, and Prisma with
                REST APIs for user and admin interactions.
              </li>
              <li>
                Integrated PostgreSQL for reliable and structured data
                management.
              </li>
              <li>
                Implemented authentication, cart management, and real-time order
                tracking.
              </li>
              <li>
                Focused on clean code, component reusability, and performance
                optimization.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Time Text */}
        <div className="w-1/2 flex items-center justify-start pl-6 md:pl-20 z-10">
          <p className="text-black dark:text-white font-semibold text-sm">
            March 2025 – Present
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
