import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
};

export default function Skills() {
  const [skills] = useState<Skill[]>([
    { name: "JavaScript", level: 93 },
    { name: "React", level: 79 },
    { name: "Tailwind CSS", level: 89 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
  ]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bar");
          } else {
            entry.target.classList.remove("animate-bar");
          }
        });
      },
      {
        threshold: 0.2, // the animation will start when the element is 20% visible
      }
    );

    // observe all the skill bars
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach((bar) => observer.current?.observe(bar));

    // cleanup function
    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="my-10">
      {skills.map((skill) => (
        <div key={skill.name} className="mb-6">
          <h3 className="my-1 font-bold">{skill.name}</h3>
          <div className="skill-bar my-2 h-2 rounded-full bg-gray-300">
            <div
              className="h-full rounded-full bg-[#784cfb]"
              style={{ width: `${skill.level}%` }}
              tabIndex={0}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
