"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image

const projectsData = [
  {
    id: 1,
    title: "Explore the wonders of France",
    description: `This project is a multi-page website that was built using Next.js. 
    The website highlights the beauty and the culture of France. 
    With its text, graphics, and easy navigation, the website is made to provide users with an interesting and educational experience.`,
    
    keyFeatures: `• A brief introduction to Wonders of France.
    • Informative sections on France's history, culture, and landmarks.
    • An interactive destinations page that highlights popular tourist places.
    • A contact page to inquire information.
    • A personalized 404 error page for easier navigation.`,
    
    image: "/images/projects/France project.jpeg",
  },
  {
    id: 2,
    title: "Movie Explorer",
    description: 'This Movie Explorer website was designed using Next.js to provide users with an engaging and interactive platform for discovering movies. It features server-side rendering (SSR) for fetching and displaying detailed movie information. In addition, the site offers client-side rendering (CSR) with a search bar allowing users to search for movies by title.',
    
    keyFeatures: "• Server-Side rendering\n• Client-Side rendering\n• User-Friendly Interface",
    image: "/images/projects/Movie Explorer.jpeg",
  },
];

const ProjectCard = ({ title, description, keyFeatures, image }) => (
  <div className="bg-gray-800 text-white p-4 rounded-md">
    <Image src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-2" width={400} height={160} />
    <h3 className="text-2xl font-bold mb-1">{title}</h3>
    <p>{description}</p>
    {keyFeatures && (
      <>
        <h4 className="text-xl font-semibold mt-4">Key Features:</h4>
        <p className="whitespace-pre-line">{keyFeatures}</p> 
      </>
    )}
  </div>
);

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.title.toLowerCase().includes(tag.toLowerCase())
        );

  return (
    <section id="projects" className="p-8 bg-gray-900">
      <h2 className="text-center text-4xl font-bold text-white mb-6">My Projects</h2>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setTag("All")} className={`px-4 py-2 rounded ${tag === "All" ? "bg-blue-600" : "bg-gray-700"}`}>
          All
        </button>
        <button onClick={() => setTag("France")} className={`px-4 py-2 rounded ${tag === "France" ? "bg-blue-600" : "bg-gray-700"}`}>
          France
        </button>
        <button onClick={() => setTag("Movie Explorer")} className={`px-4 py-2 rounded ${tag === "Movie Explorer" ? "bg-blue-600" : "bg-gray-700"}`}>
          Movie Explorer
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            keyFeatures={project.keyFeatures} 
            image={project.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
