import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Alert, Spin, Button } from 'antd';
import { EditOutlined, ExclamationCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchItemById, clearItem } from '../store/cardDetailSlice';
import { CATEGORY_LABELS, TRANSMISSION_LABELS, REAL_ESTATE_TYPE_LABELS, ELECTRONICS_TYPE_LABELS, CONDITION_LABELS } from '../utils/categories';
import { getMissingFields } from '../utils/needsRevision';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import type { ItemDetail, Category } from '../types/card';

function getCharacteristicsForDisplay(item: ItemDetail): { label: string; value: string }[] {
  const chars: { label: string; value: string }[] = [];
  const params = item.params as Record<string, unknown>;

  switch (item.category) {
    case 'electronics':
      if (params.type) chars.push({ label: 'Тип', value: ELECTRONICS_TYPE_LABELS[params.type as string] || String(params.type) });
      if (params.brand) chars.push({ label: 'Бренд', value: String(params.brand) });
      if (params.model) chars.push({ label: 'Модель', value: String(params.model) });
      if (params.condition) chars.push({ label: 'Состояние', value: CONDITION_LABELS[params.condition as string] || String(params.condition) });
      if (params.color) chars.push({ label: 'Цвет', value: String(params.color) });
      break;
    case 'auto':
      if (params.brand) chars.push({ label: 'Бренд', value: String(params.brand) });
      if (params.model) chars.push({ label: 'Модель', value: String(params.model) });
      if (params.yearOfManufacture) chars.push({ label: 'Год выпуска', value: String(params.yearOfManufacture) });
      if (params.transmission) chars.push({ label: 'Коробка передач', value: TRANSMISSION_LABELS[params.transmission as string] || String(params.transmission) });
      if (params.mileage !== undefined && params.mileage !== null) chars.push({ label: 'Пробег', value: `${Number(params.mileage).toLocaleString('ru-RU')} км` });
      if (params.enginePower) chars.push({ label: 'Мощность двигателя', value: `${params.enginePower} л.с.` });
      break;
    case 'real_estate':
      if (params.type) chars.push({ label: 'Тип', value: REAL_ESTATE_TYPE_LABELS[params.type as string] || String(params.type) });
      if (params.address) chars.push({ label: 'Адрес', value: String(params.address) });
      if (params.area) chars.push({ label: 'Площадь', value: `${params.area} м²` });
      if (params.floor) chars.push({ label: 'Этаж', value: String(params.floor) });
      break;
  }

  return chars;
}

function formatDate(isoString: string): string {
  try {
    return format(new Date(isoString), 'd MMMM yyyy, HH:mm', { locale: ru });
  } catch {
    return isoString;
  }
}

export default function CardDetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { item, loading, error } = useAppSelector((state) => state.itemDetail);

  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchItemById(Number(id)));
      return () => { promise.abort(); };
    }
  }, [dispatch, id]);

  useEffect(() => {
    return () => { dispatch(clearItem()); };
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="max-w-[1400px] mx-auto">
          <Alert message="Ошибка загрузки" description={error} type="error" showIcon />
          <Link to="/ads" className="inline-block mt-4">
            <Button icon={<ArrowLeftOutlined />}>Вернуться к списку</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="p-8">
        <div className="max-w-[1400px] mx-auto">
          <Alert message="Объявление не найдено" type="warning" showIcon />
          <Link to="/ads" className="inline-block mt-4">
            <Button icon={<ArrowLeftOutlined />}>Вернуться к списку</Button>
          </Link>
        </div>
      </div>
    );
  }

  const characteristics = getCharacteristicsForDisplay(item);
  const missingFields = getMissingFields(item);
  const needsRevision = missingFields.length > 0;

  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Back link */}
        <Link to="/ads" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-4">
          <ArrowLeftOutlined /> К списку объявлений
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-xs rounded mb-2">
                  {CATEGORY_LABELS[item.category]}
                </span>
                <h1 className="text-3xl font-medium">{item.title}</h1>
              </div>
              <p className="text-3xl font-medium">{item.price.toLocaleString('ru-RU')} ₽</p>
            </div>

            <div className="flex items-start justify-between">
              <Link to={`/ads/${item.id}/edit`}>
                <Button type="primary" icon={<EditOutlined />}>
                  Редактировать
                </Button>
              </Link>

              <div className="text-right text-gray-500">
                <p>Опубликовано: {formatDate(item.createdAt)}</p>
                {item.updatedAt && <p>Отредактировано: {formatDate(item.updatedAt)}</p>}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-600 mb-8" />

          {/* Details Section */}
          <div className="flex gap-8 mb-8">
            {/* Image */}
            <div className="w-[480px] shrink-0">
              <div className="bg-[#fafafa] dark:bg-gray-700 rounded-lg h-[360px] flex items-center justify-center">
                <svg className="w-48 h-48 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            </div>

            {/* Characteristics */}
            <div className="flex-1">
              {/* Notification for missing fields */}
              {needsRevision && (
                <div className="mb-6 bg-[#f9f1e6] dark:bg-yellow-900/30 rounded-lg p-4 shadow-md flex gap-4">
                  <ExclamationCircleOutlined className="text-[#FFA940] text-lg mt-1" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">Требуются доработки</h3>
                    <p className="text-sm mb-1">У объявления не заполнены поля:</p>
                    <ul className="list-disc ml-5 text-sm">
                      {missingFields.map((field, index) => (
                        <li key={index}>{field}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <h2 className="text-xl font-medium mb-4">Характеристики</h2>
              {characteristics.length > 0 ? (
                <div className="space-y-2">
                  {characteristics.map((char, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="w-[180px] text-gray-500 dark:text-gray-400 font-semibold">{char.label}</span>
                      <span>{char.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Характеристики не указаны</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-medium mb-4">Описание</h2>
            {item.description && item.description.trim() ? (
              <p className="text-base leading-relaxed">{item.description}</p>
            ) : (
              <p className="text-gray-400">Отсутствует</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
