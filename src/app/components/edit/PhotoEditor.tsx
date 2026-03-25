import { useState } from 'react';
import { Button, Tooltip } from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StarOutlined,
  StarFilled,
  HolderOutlined,
} from '@ant-design/icons';

interface PhotoEditorProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export default function PhotoEditor({ images, onChange }: PhotoEditorProps) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    const next = images.filter((_, i) => i !== index);
    onChange(next);
  };

  const handleSetMain = (index: number) => {
    if (index === 0) return;
    const next = [...images];
    const [moved] = next.splice(index, 1);
    next.unshift(moved);
    onChange(next);
  };

  const handleMoveLeft = (index: number) => {
    if (index === 0) return;
    const next = [...images];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    onChange(next);
  };

  const handleMoveRight = (index: number) => {
    if (index === images.length - 1) return;
    const next = [...images];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    onChange(next);
  };

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null);
      setDragOverIndex(null);
      return;
    }
    const next = [...images];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(index, 0, moved);
    onChange(next);
    setDragIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Фотографии</h3>

      {images.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-3">Нет фотографий</p>
          <Tooltip title="Загрузка фото недоступна в демо-режиме">
            <Button icon={<PlusOutlined />} disabled>
              Добавить фото
            </Button>
          </Tooltip>
        </div>
      ) : (
        <>
          <div className="flex gap-3 flex-wrap mb-3">
            {images.map((img, i) => (
              <div
                key={`${img}-${i}`}
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={(e) => handleDragOver(e, i)}
                onDrop={() => handleDrop(i)}
                onDragEnd={handleDragEnd}
                className={`relative group rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === 0
                    ? 'border-blue-500 dark:border-blue-400'
                    : dragOverIndex === i
                      ? 'border-blue-300 dark:border-blue-500 scale-105'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-400'
                } ${dragIndex === i ? 'opacity-50' : ''}`}
                style={{ width: i === 0 ? 200 : 120, height: i === 0 ? 140 : 90 }}
              >
                <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />

                {/* Main badge */}
                {i === 0 && (
                  <div className="absolute top-1 left-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                    Главная
                  </div>
                )}

                {/* Drag handle */}
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 text-white rounded p-0.5 cursor-grab">
                    <HolderOutlined className="text-xs" />
                  </div>
                </div>

                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end justify-center pb-1.5 gap-1 opacity-0 group-hover:opacity-100">
                  {i !== 0 && (
                    <Tooltip title="Сделать главной">
                      <button
                        onClick={() => handleSetMain(i)}
                        className="w-6 h-6 bg-white/90 rounded flex items-center justify-center hover:bg-yellow-100 transition-colors"
                      >
                        <StarOutlined className="text-xs text-yellow-600" />
                      </button>
                    </Tooltip>
                  )}
                  {i === 0 && (
                    <Tooltip title="Главное фото">
                      <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                        <StarFilled className="text-xs text-yellow-600" />
                      </div>
                    </Tooltip>
                  )}
                  {i > 0 && (
                    <Tooltip title="Переместить влево">
                      <button
                        onClick={() => handleMoveLeft(i)}
                        className="w-6 h-6 bg-white/90 rounded flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <ArrowLeftOutlined className="text-xs" />
                      </button>
                    </Tooltip>
                  )}
                  {i < images.length - 1 && (
                    <Tooltip title="Переместить вправо">
                      <button
                        onClick={() => handleMoveRight(i)}
                        className="w-6 h-6 bg-white/90 rounded flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <ArrowRightOutlined className="text-xs" />
                      </button>
                    </Tooltip>
                  )}
                  <Tooltip title="Удалить">
                    <button
                      onClick={() => handleDelete(i)}
                      className="w-6 h-6 bg-white/90 rounded flex items-center justify-center hover:bg-red-100 transition-colors"
                    >
                      <DeleteOutlined className="text-xs text-red-500" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>

          <Tooltip title="Загрузка фото недоступна в демо-режиме">
            <Button icon={<PlusOutlined />} size="small" disabled>
              Добавить фото
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
}
