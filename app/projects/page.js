'use client'
import { useState } from "react";

const projects = [
  { title: "Project 1", img: "/client.jpg1.jpg" },
  { title: "Project 2", img: "/client.jpg2.jpg" },
  { title: "Project 3", img: "/client.jpg3.jpg" },
  { title: "Project 4", img: "/client.jp4.jpg" },
  { title: "Project 5", img: "/client.jpg5.jpg" },
  { title: "Project 6", img: "/client.jpg6.jpg" },
  { title: "Project 7", img: "/client.jpg7.jpg" },
];

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerRow = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(projects.length / projectsPerRow) - 1
        : prevIndex - 1  
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(projects.length / projectsPerRow) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const displayedProjects = projects.slice(
    currentIndex * projectsPerRow,
    (currentIndex + 1) * projectsPerRow
  );

  return (
    <section className="bg-white text-white py-20" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-lime-500 text-center">
          Our Recent Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mt-4">
          See some of the outstanding projects we’ve delivered.
        </p>

        <div className="mt-10 relative">
          {/* Projects Display */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold text-lime-500 mt-4">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-lime-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-lime-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
