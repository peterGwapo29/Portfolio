import React, { useEffect, useState } from "react";
import {
  featuredProjects,
  otherProjects,
  getProjectById,
  projectAssets,
} from "../data/projectData";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const { thumbnails } = projectAssets;
  const selectedProject = selectedProjectId
    ? getProjectById(selectedProjectId)
    : null;

  const getThumbnail = (key) => (key ? thumbnails[key] : null);

  useEffect(() => {
    if (selectedProjectId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProjectId]);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <section className="page-section">
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          projects
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          Products and systems I've designed and shipped — spanning full-stack
          web platforms, mobile apps, desktop utilities, and high-fidelity UI
          prototypes.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {featuredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProjectId(project.id)}
            className="bg-[#121214] border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-zinc-700 transition-colors text-left w-full"
          >
            {getThumbnail(project.screenshotsKey) ? (
              <div className="w-full md:w-52 lg:w-60 shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c0d]">
                <img
                  src={getThumbnail(project.screenshotsKey)}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-40 sm:h-44 object-cover object-top"
                  draggable={false}
                />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-2xl text-[#fca311] shrink-0 border border-zinc-700/50">
                <i className={project.icon}></i>
              </div>
            )}

            <div className="flex flex-col w-full min-w-0">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-zinc-800 bg-[#0c0c0d] text-zinc-500 tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold text-white mb-2 font-mono">
                {project.title}
              </h2>

              <p className="text-zinc-400 text-sm mb-4 leading-relaxed max-w-2xl line-clamp-3">
                {project.summary}
              </p>

              <span className="text-[#fca311] text-xs font-mono mt-auto">
                View project →
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">
          all secondary releases
        </h3>

        <div className="border border-zinc-900 rounded-2xl overflow-hidden bg-[#0c0c0d]">
          {otherProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProjectId(project.id)}
              className="list-row flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center gap-3 sm:gap-4 text-zinc-400 hover:text-white transition-colors duration-200 w-full text-left"
            >
              <div className="sm:col-span-3 flex items-center gap-3">
                {getThumbnail(project.screenshotsKey) && (
                  <div className="w-12 h-12 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-[#121214]">
                    <img
                      src={getThumbnail(project.screenshotsKey)}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                )}
                <span className="font-mono font-bold text-sm text-[#e4e4e7]">
                  {project.title}
                </span>
              </div>

              <div className="sm:col-span-2 flex">
                <span className="text-[10px] font-mono border border-zinc-805 bg-[#121214] px-2 py-0.5 rounded tracking-wide text-zinc-500 font-semibold uppercase">
                  {project.category}
                </span>
              </div>

              <div className="sm:col-span-5 text-xs font-sans leading-relaxed text-zinc-500">
                {project.summary}
              </div>

              <div className="sm:col-span-2 text-right text-[#fca311] text-xs font-mono">
                View →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
