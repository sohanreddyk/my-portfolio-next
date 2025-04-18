import Image from "next/image";

// Define types for the props that SkillsCard component will accept
interface SkillsCardProps {
  title: string;
  icon: string;
  alt: string;
}

export default function SkillsCard({ title, icon, alt }: SkillsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-transparent shadow-md hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-28 sm:h-28">
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
        <Image src={icon} alt={alt} layout="fill" objectFit="contain" />
      </div>
      <p className=" dark:text-white text-black text-xs sm:text-sm mt-2 text-center">
        {title}
      </p>
    </div>
  );
}
