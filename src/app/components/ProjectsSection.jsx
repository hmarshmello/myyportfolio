"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hiring Process Analysis",
    description: "Project 1 description",
    tag: ["All" , "Viz"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Inflation Prediction",
    description: "Project 2 description",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Covid Analysis",
    description: "Project 3 description",
    tag: ["All", "SQL"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Stolen Vehicle Analysis",
    description: "Project 4 description",
    tag: ["All", "Python", "Viz"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "News Analysis",
    description: "Authentication and CRUD operations",
    tag: ["All", "Python", "Viz"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Instagram Analysis",
    description: "Project 5 description",
    tag: ["All", "SQL", "Viz"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SQL"
          isSelected={tag === "SQL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Viz"
          isSelected={tag === "Viz"}
        />  
      </div>
      <ul ref={ref} className="grid md:grid-cols-4 gap-4 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
