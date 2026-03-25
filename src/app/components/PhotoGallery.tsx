// галерея фотографий для страницы объявления
// основное фото + миниатюры снизу, стрелки переключения, клик открывает лайтбокс (antd Image.PreviewGroup)
import { useState, useRef, useEffect } from 'react';
import { Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface PhotoGalleryProps {
  images: string[];
}

// заглушка когда фото нет
const ImagePlaceholder = () => (
  <div className="bg-[#fafafa] dark:bg-gray-700 w-full h-full flex items-center justify-center">
    <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  </div>
);

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  // автоскролл к активной миниатюре
  useEffect(() => {
    const thumb = thumbRefs.current[selectedIndex];
    if (thumb && scrollRef.current) {
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedIndex]);

  if (!images || images.length === 0) {
    return (
      <div className="w-[480px] shrink-0">
        <div className="rounded-lg h-[360px] overflow-hidden">
          <ImagePlaceholder />
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-[480px] shrink-0">
      {/* основное фото + стрелки навигации */}
      <div
        className="relative group rounded-lg h-[360px] overflow-hidden mb-3 cursor-pointer"
        onClick={() => setPreviewOpen(true)}
      >
        <img
          src={images[selectedIndex]}
          alt={`Фото ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-600"
            >
              <LeftOutlined className="text-sm" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-600"
            >
              <RightOutlined className="text-sm" />
            </button>
          </>
        )}

        {/* счётчик фото */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* миниатюры */}
      {images.length > 1 && (
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => { thumbRefs.current[i] = el; }}
              onClick={() => setSelectedIndex(i)}
              className={`w-[100px] h-[70px] rounded-md overflow-hidden shrink-0 border-2 transition-colors cursor-pointer ${
                i === selectedIndex ? 'border-blue-500' : 'border-transparent hover:border-gray-400'
              }`}
            >
              <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* скрытый Image.PreviewGroup — antd лайтбокс, открывается по клику на основное фото */}
      <div style={{ height: 0, overflow: 'hidden' }}>
        <Image.PreviewGroup
          preview={{
            visible: previewOpen,
            onVisibleChange: (vis) => setPreviewOpen(vis),
            current: selectedIndex,
            onChange: (current) => setSelectedIndex(current),
          }}
        >
          {images.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
