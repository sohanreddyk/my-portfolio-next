import SkillsCard from "./SkillsCard";


// Define types for the skills array items
interface Skill {
  title: string;
  icon: string;
  alt: string;
}

const frontEndSkills: Skill[] = [
  {
    title: "Angular",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    alt: "Angular",
  },
  {
    title: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML",
  },
  {
    title: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    alt: "CSS",
  },
  
  {
    title: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    title: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript",
  },
  {
    title: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind",
  },
];

const backEndSkills: Skill[] = [
 
 
  {
    title: "Node.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js",
  },
 
  {
    title: "MySQL",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    alt: "MySQL",
  },
  {
    title: "PostgreSQL",
    icon: "/postgres.svg.png",
    alt: "PostgreSQL",
  },
  {
    title: "Oracle DB",
    icon: "/oracle.png",
    alt: "Oracle DB",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen dark:bg-neutral dark:text-white text-black p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Technical Skills</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 dark:text-white text-black">
          Front-end
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {frontEndSkills.map((skill, idx) => (
            <SkillsCard key={idx} {...skill} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6 dark:text-white text-black">
          Back-end
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {backEndSkills.map((skill, idx) => (
            <SkillsCard key={idx} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
