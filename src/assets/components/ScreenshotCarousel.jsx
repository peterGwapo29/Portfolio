import React, { useEffect } from "react";

function ScreenshotCarousel({
  isOpen,
  title,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onSelect,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images.length) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-[#0c0c0d]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 bg-[#0c0c0d]">
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white font-mono">{title}</h3>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              View {index + 1} of {images.length}
            </p>
          </div>

          <button
            className="w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-800 transition flex items-center justify-center text-white text-sm"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="relative bg-black flex items-center justify-center h-[55vh]">
          <img
            src={images[index]}
            alt={`${title}-${index}`}
            className="max-h-full max-w-full object-contain select-none p-4"
            draggable={false}
          />

          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 transition flex items-center justify-center text-white text-lg font-mono focus:outline-none"
          >
            ‹
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 transition flex items-center justify-center text-white text-lg font-mono focus:outline-none"
          >
            ›
          </button>
        </div>

        <div className="p-4 border-t border-zinc-900 bg-[#0c0c0d] flex flex-col gap-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {images.map((img, idx) => {
              const active = idx === index;
              return (
                <button
                  key={idx}
                  onClick={() => onSelect(idx)}
                  className={`shrink-0 rounded-md overflow-hidden border-2 transition ${
                    active
                      ? "border-[#fca311]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    className="h-10 w-16 object-cover"
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
            <button
              onClick={onPrev}
              className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 transition"
            >
              ◀ Prev
            </button>
            <button
              onClick={onNext}
              className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 transition"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenshotCarousel;
