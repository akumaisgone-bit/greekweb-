import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  name: string;
  desc: string;
  image: string;
  link?: string;
}

const projectsList: Project[] = [
  {
    name: 'Wyzé',
    desc: 'Smarter spending clarity, better savings decisions, and personal finance coach.',
    image: '/project1.png',
    link: 'https://wyze-landing.vercel.app',
  },
  {
    name: 'Universal Excel AI',
    desc: 'Talk to your Excel spreadsheets like a human using natural language.',
    image: '/project2.png',
    link: 'https://universalexcelai.cc.cd/',
  },
  {
    name: 'Anshwu',
    desc: 'A designer & developer portfolio focused on crafting bold visual identities.',
    image: '/project3.png',
    link: 'https://anshwupie.netlify.app',
  },
];

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const itemRef = useInViewAnimation<HTMLDivElement>();

  const Content = (
    <>
      <div className="ml-0 sm:ml-20 md:ml-28 mb-4">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24] tracking-tight inline-flex items-center gap-1.5 group-hover:text-[#4D6D47] transition-colors duration-300">
          {project.name}
          {project.link && (
            <ArrowUpRight className="w-5 h-5 text-[#051A24]/70 group-hover:text-[#4D6D47] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
          )}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1">
          {project.desc}
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-[#F1F3F1]">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-750 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </>
  );

  return (
    <div 
      ref={itemRef}
      className="flex flex-col w-full opacity-0 animate-target select-none"
    >
      {project.link ? (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full cursor-pointer"
        >
          {Content}
        </a>
      ) : (
        <div className="group block w-full">
          {Content}
        </div>
      )}
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 bg-white flex flex-col gap-16 md:gap-20">
      {projectsList.map((project, idx) => (
        <ProjectItem key={idx} project={project} />
      ))}
    </section>
  );
};
export default ProjectsSection;

