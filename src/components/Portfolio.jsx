import { useEffect, useMemo, useState } from "react";

import wedding1 from "../assets/images/portfolio/wedding-1.jpg";
import wedding2 from "../assets/images/portfolio/wedding-2.jpg";
import studio1 from "../assets/images/portfolio/studio-1.jpg";
import studio2 from "../assets/images/portfolio/studio-2.jpg";
import snap1 from "../assets/images/portfolio/snap-1.jpg";
import snap2 from "../assets/images/portfolio/snap-2.jpg";
import profile1 from "../assets/images/portfolio/profile-1.jpg";
import profile2 from "../assets/images/portfolio/profile-2.jpg";

import film1 from "../assets/videos/film-1.mp4";
import film2 from "../assets/videos/film-2.mp4";

const categories = ["ALL", "WEDDING", "STUDIO", "SNAP", "FILM", "PROFILE"];

const portfolioItems = [
  {
    id: 1,
    category: "WEDDING",
    type: "image",
    src: wedding1,
    title: "Wedding Moment 01",
  },
  {
    id: 2,
    category: "WEDDING",
    type: "image",
    src: wedding2,
    title: "Wedding Moment 02",
  },
  {
    id: 3,
    category: "STUDIO",
    type: "image",
    src: studio1,
    title: "Studio Mood 01",
  },
  {
    id: 4,
    category: "STUDIO",
    type: "image",
    src: studio2,
    title: "Studio Mood 02",
  },
  {
    id: 5,
    category: "SNAP",
    type: "image",
    src: snap1,
    title: "Snap Story 01",
  },
  {
    id: 6,
    category: "SNAP",
    type: "image",
    src: snap2,
    title: "Snap Story 02",
  },
  {
    id: 7,
    category: "FILM",
    type: "video",
    src: film1,
    title: "Film Story 01",
  },
  {
    id: 8,
    category: "FILM",
    type: "video",
    src: film2,
    title: "Film Story 02",
  },
  {
    id: 9,
    category: "PROFILE",
    type: "image",
    src: profile1,
    title: "Profile Portrait 01",
  },
  {
    id: 10,
    category: "PROFILE",
    type: "image",
    src: profile2,
    title: "Profile Portrait 02",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "ALL") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (!filteredItems.length) return;

    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!filteredItems.length) return;

    setSelectedIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  return (
    <>
      <section
        id="portfolio"
        className="bg-[#f7f4ef] px-6 py-24 text-[#2f2a26] md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8a7f74]">
              Portfolio
            </p>
            <h2 className="mb-4 font-serif text-3xl font-light md:text-5xl">
              당신의 이야기를 담아드립니다
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6f665e] md:text-base">
              웨딩, 스튜디오, 스냅, 필름, 프로필까지
              이담 스튜디오는 가장 자연스럽고 오래 남는 순간을 기록합니다.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-w-[92px] border px-4 py-2 text-xs tracking-[0.24em] transition-all duration-300 md:text-sm ${
                    isActive
                      ? "border-[#2f2a26] bg-[#2f2a26] text-white"
                      : "border-[#d8d0c8] bg-transparent text-[#5b534c] hover:border-[#2f2a26] hover:text-[#2f2a26]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden bg-white text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/25 backdrop-blur-sm transition duration-300 group-hover:scale-110">
                          <span className="ml-1 text-xl text-white">▶</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-6 px-6 pb-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-white/80">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-10"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-[110] text-3xl text-white/80 transition hover:text-white"
            aria-label="Close lightbox"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 px-3 py-2 text-3xl text-white/70 transition hover:text-white md:left-8"
            aria-label="Previous item"
          >
            ‹
          </button>

          <div
            className="relative max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[80vh] w-full object-contain"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-h-[80vh] w-full object-contain"
              />
            )}

            <div className="mt-4 text-center text-white">
              <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
                {selectedItem.category}
              </p>
              <h3 className="font-serif text-2xl">{selectedItem.title}</h3>
              <p className="mt-2 text-sm text-white/60">
                {selectedIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 px-3 py-2 text-3xl text-white/70 transition hover:text-white md:right-8"
            aria-label="Next item"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}