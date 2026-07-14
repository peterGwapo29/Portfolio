import React, { useState } from "react";
import { projectAssets } from "../data/projectData";
import ScreenshotCarousel from "./ScreenshotCarousel";

function ProjectDetail({ project, onBack }) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { thumbnails, screenshotSets, videos } = projectAssets;
  const thumbnail = project.screenshotsKey
    ? thumbnails[project.screenshotsKey]
    : null;
  const screenshots = project.screenshotsKey
    ? screenshotSets[project.screenshotsKey] || []
    : [];
  const video = project.screenshotsKey
    ? videos[project.screenshotsKey]
    : null;

  const openCarousel = (start = 0) => {
    if (!screenshots.length) return;
    setCarouselIndex(start);
    setCarouselOpen(true);
  };

  const hasActions =
    project.links?.github ||
    project.links?.demo ||
    screenshots.length > 0 ||
    video;

  return (
    <section className="page-section">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-mono mb-8 transition-colors"
      >
        <span>←</span>
        <span>Back to projects</span>
      </button>

      <div className="flex flex-col gap-8">
        {thumbnail && (
          <button
            type="button"
            onClick={() => openCarousel(0)}
            className={`w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c0d] ${
              screenshots.length
                ? "cursor-pointer hover:border-zinc-700 transition-colors"
                : "cursor-default"
            }`}
          >
            <img
              src={thumbnail}
              alt={`${project.title} preview`}
              className="w-full h-48 sm:h-64 object-cover object-top"
              draggable={false}
            />
          </button>
        )}

        {video && (
          <div className="w-full max-w-3xl">
            <h2 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Project Recording
            </h2>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <video
                src={video}
                controls
                playsInline
                className="w-full max-h-[28rem] object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 max-w-3xl">
          {project.badges?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-zinc-800 bg-[#0c0c0d] text-zinc-500 tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {project.category && !project.badges && (
            <span className="text-[10px] font-mono border border-zinc-805 bg-[#121214] px-2 py-0.5 rounded tracking-wide text-zinc-500 font-semibold uppercase w-fit">
              {project.category}
            </span>
          )}

          <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {project.extraDescription && (
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.extraDescription}
            </p>
          )}

          {project.features?.length > 0 && (
            <div>
              <h2 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-[#fca311] mt-0.5 shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="project-appstore-btn"
              >
                <i className="devicon-github-original text-base"></i>
                <span>Download on GitHub</span>
              </a>
            )}

            {screenshots.length > 0 && (
              <button
                onClick={() => openCarousel(0)}
                className="project-appstore-btn"
              >
                <i className="fa-solid fa-images text-base"></i>
                <span>View Screenshots</span>
              </button>
            )}

            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="project-playstore-btn"
              >
                <i className="fa-solid fa-play text-white text-xs"></i>
                <span>Get Live Demo</span>
              </a>
            )}

            {!hasActions && (
              <button
                onClick={() =>
                  alert("Live demo files not publicly hosted yet.")
                }
                className="project-playstore-btn"
              >
                <i className="fa-solid fa-circle-exclamation text-zinc-400 text-xs"></i>
                <span>Request Access</span>
              </button>
            )}
          </div>

          <div className="border-t border-zinc-900 pt-6 flex flex-col gap-3 text-[11px] text-zinc-500 font-mono">
            {project.client && (
              <div>
                <span className="text-zinc-600">CLIENT:</span> {project.client}
              </div>
            )}
            {project.featuredIn && (
              <div>
                <span className="text-zinc-600">FEATURED IN:</span>{" "}
                {project.featuredIn}
              </div>
            )}
            {project.tech?.length > 0 && (
              <div>
                <span className="text-zinc-600">TECH:</span>{" "}
                {project.tech.join(" / ")}
              </div>
            )}
          </div>
        </div>
      </div>

      <ScreenshotCarousel
        isOpen={carouselOpen}
        title={project.carouselTitle || `${project.title} Screenshots`}
        images={screenshots}
        index={carouselIndex}
        onClose={() => setCarouselOpen(false)}
        onPrev={() =>
          setCarouselIndex(
            (i) => (i - 1 + screenshots.length) % screenshots.length
          )
        }
        onNext={() =>
          setCarouselIndex((i) => (i + 1) % screenshots.length)
        }
        onSelect={setCarouselIndex}
      />
    </section>
  );
}

export default ProjectDetail;
