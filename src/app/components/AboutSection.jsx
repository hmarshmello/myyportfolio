"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Database Skills",
    id: "skills1",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>SSIS</li>
        <li>RedShift SQL</li>
        <li>MongoDB</li>
        <li>Docker</li>
        <li>Hadoop</li>
      </ul>
    ),
  },
  {
    title: "Analytical Tools",
    id: "skills2",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>R</li>
        <li>Excel</li>
        <li>Pytorch</li>
        <li>PySpark / Spark</li>
      </ul>
    ),
  },
  {
    title: "Cloud Tools",
    id: "skills3",
    content: (
      <ul className="list-disc pl-2">
        <li>Snowflake</li>
        <li>Google Analysis</li>
        <li>AWS S3</li>
        <li>Azure Cloud</li>
        <li>BigQuery</li>
        <li>MS Fabrics</li>
      </ul>
    ),
  },
  {
    title: "Viz Tools",
    id: "skills4",
    content: (
      <ul className="list-disc pl-2">
        <li>Tableau</li>
        <li>PowerBI</li>
        <li>Looker</li>
        <li>PowerPoint</li>
      </ul>
    ),
  },
  {
    title: "Data Science",
    id: "skills5",
    content: (
      <ul className="list-disc pl-2">
        <li>TensorFlow</li>
        <li>Statistics</li>
        <li>A/B Testing</li>
        <li>Scikit-Learn</li>
        <li>NLP</li>
        <li>ML</li>

      </ul>
    ),
  },
  {
    title: "AI",
    id: "skills6",
    content: (
      <ul className="list-disc pl-2">
        <li>LangChain</li>
        <li>GenAI</li>
        <li>AI Agents</li>
        <li>Feature Engineering</li>
        <li>Keras</li>
        <li>OpenCV</li>
        <li>NLTK</li>
        <li>Theano</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SRM Univercity, Chennai - May 2024</li>
        <li>DPS, Gwalior - 10+2 Board</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Academy Data Analytics</li>
        <li>Google Professional Data Analyst</li>
        <li>Google Professional Business Intelligence</li>
        <li>Certificate Tableau Developer</li>
        <li>SQL for Data Science - UC Davis</li>
        <li>Leetcode - SQL, Pandas Badge</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills1");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Experienced Data Analyst with a strong background in Python, SQL, and AI/ML lifecycle management.
          Proven track record in enhancing productivity and driving sales through innovative data solutions. 
          Skilled in using PowerBI, Azure Cloud, and various data analysis tools.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills1")}
              active={tab === "skills1"}
            >
              {" "}
              Database{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills2")}
              active={tab === "skills2"}
            >
              {" "}
              Analysis{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills3")}
              active={tab === "skills3"}
            >
              {" "}
              Cloud{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills4")}
              active={tab === "skills4"}
            >
              {" "}
              Visuals{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills5")}
              active={tab === "skills5"}
            >
              {" "}
              DS{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills6")}
              active={tab === "skills6"}
            >
              {" "}
              AI{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Edu{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
