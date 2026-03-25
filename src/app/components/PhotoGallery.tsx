import { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface PhotoGalleryProps {
  images: string[];
}

const ImagePlaceholder = () => (
  <div className="bg-[#fafafa] dark:bg-gray-700 w-full h-full flex items-center justify-center">
    <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  </div>
);

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return (
      <div className="w-[480px] shrink-0">
        <div className="rounded-lg h-[360px] overflow-hidden">
          <ImagePlaceholder />
        </div>
      </div>
    );
  }

  const mainImage = images[0];
  const thumbs = images.slice(1);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 120;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-[480px] shrink-0">
      {/* Main image */}
      <div className="rounded-lg h-[360px] overflow-hidden mb-3">
        <img
          src={mainImage}
          alt="Главное фото"
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Thumbnails with horizontal scroll */}
      {thumbs.length > 0 && (
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/90 dark:bg-gray-700/90 rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <LeftOutlined className="text-xs" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {thumbs.map((img, i) => (
              <div
                key={i}
                className="w-[100px] h-[70px] rounded-md overflow-hidden shrink-0 border-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Фото ${i + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/90 dark:bg-gray-700/90 rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <RightOutlined className="text-xs" />
          </button>
        </div>
      )}
    </div>
  );
}
