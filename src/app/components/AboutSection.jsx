"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          <strong>University of Sri Jayewardenepura</strong><br />
          Bachelors of Science (Honours) in Information Technology<br />
          Graduated: Undergoing
        </li>
        <li className="mb-4">
          <strong>Holy Family Convent, Colombo 4</strong><br />
          G.C.E. Advanced Level<br />
          Graduated: March 2022
        </li>
        <li>
          <strong>SITC Campus</strong><br />
          Diploma in Psychology and Counseling<br />
          Graduated: Undergoing
        </li>
      </ul>
    ),
  },
  {
    title: "Skills", 
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education"); // Set the initial state to "education"
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about_image.jpeg" 
          width={400} 
          height={400} 
          alt="A photo of Dewmini Rupasinghe" // Added alt prop
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Dewmini Rupasinghe, an undergraduate student passionate about UI/UX design. 
            I love creating simple, user-friendly designs and I&apos;m eager to keep learning and growing in the field.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              Skills
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
