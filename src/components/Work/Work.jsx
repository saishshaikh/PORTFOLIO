import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-b from-black to-[#0f172a]"
    >
      {/* Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-white">
          PROJECTS
        </h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <p className="mt-4 text-lg text-gray-400">
          A showcase of my work 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="grid items-stretch grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-full overflow-hidden rounded-2xl group"
          >
            {/* Glow */}
            <div className="absolute inset-0 transition opacity-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg group-hover:opacity-30"></div>

            {/* Card */}
            <div
              onClick={() => handleOpenModal(project)}
              className="relative flex flex-col h-full transition duration-300 border border-gray-700 shadow-xl cursor-pointer bg-gray-900/80 backdrop-blur-xl rounded-2xl group-hover:-translate-y-2"
            >
              {/* Image */}
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition duration-500 rounded-xl group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition group-hover:text-purple-400">
                  {project.title}
                </h3>

                {/* Fixed height description */}
                <p className="mb-4 text-sm text-gray-400 line-clamp-3 min-h-[60px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs text-purple-400 border rounded-full bg-purple-500/10 border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-1/2 py-2 text-sm font-semibold text-center transition bg-gray-800 rounded-lg hover:bg-purple-700"
                  >
                    💻 Code
                  </a>

                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-1/2 py-2 text-sm font-semibold text-center transition bg-green-600 rounded-lg hover:bg-green-500"
                    >
                      🚀 Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute z-10 text-3xl text-white top-3 right-3 hover:text-purple-500"
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="mb-4 text-gray-400">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center bg-gray-800 rounded-lg hover:bg-purple-700"
                >
                  💻 Code
                </a>

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center bg-green-600 rounded-lg hover:bg-green-500"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;