"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "skills1",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>T-SQL</li>
        <li>Python</li>
        <li>R</li>
        <li>MongoDB</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Analytical Tools",
    id: "skills2",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>Docker</li>
        <li>BigQuery</li>
        <li>Excel</li>
        <li>AWS S3</li>
        <li>Kibana</li>
        <li>Tableau</li>
        <li>PowerBI</li>
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
        <li>Certifiet Tableau Developer</li>
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
            I am a Data Analyst/Data Engineer/BI Analyst with a passion for 
            creating insightfull reports and doing complex analysis on statistical data and also on GeoMapping data. 
            I have experience working with Python, MySQL, Excel, Machine Learning, Docker, MongoDB, Tableau, BigQuery and AWS S3
            I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to unfold complex data from around the world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills1")}
              active={tab === "skills1"}
            >
              {" "}
              Coding{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills2")}
              active={tab === "skills2"}
            >
              {" "}
              Analysis{" "}
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
