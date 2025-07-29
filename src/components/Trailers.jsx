import React, { useRef, useState } from 'react';
import { dummyTrailers } from '../assets/assets';

const Trailers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative px-4 py-6 sm:px-8">
      <h1 className="text-white text-2xl font-bold mb-4 sm:text-3xl sm:mb-6">Promos</h1>

      {/* Scroll buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
        onClick={() => scroll('left')}
      >
        ❮
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
        onClick={() => scroll('right')}
      >
        ❯
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {dummyTrailers.map((trailer, index) => (
          <a
            key={index}
            href={trailer.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex-shrink-0 min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] transition-transform duration-300 ${
              hoveredIndex === index
                ? 'scale-105 z-10'
                : hoveredIndex !== null
                ? 'scale-95 opacity-70'
                : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-40 sm:h-48 object-cover rounded-lg transition-opacity group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Trailers;