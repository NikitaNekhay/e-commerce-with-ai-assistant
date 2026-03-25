// маппинги категорий и их параметров на русские лейблы
// используются в UI для отображения

import type { Category } from '../types/card';

export const CATEGORY_LABELS: Record<Category, string> = {
  auto: 'Транспорт',
  real_estate: 'Недвижимость',
  electronics: 'Электроника',
};

export const CATEGORY_OPTIONS: { value: Category; label: string }[] = [
  { value: 'electronics', label: 'Электроника' },
  { value: 'auto', label: 'Транспорт' },
  { value: 'real_estate', label: 'Недвижимость' },
];

export const TRANSMISSION_LABELS: Record<string, string> = {
  automatic: 'Автоматическая',
  manual: 'Механическая',
};

export const REAL_ESTATE_TYPE_LABELS: Record<string, string> = {
  flat: 'Квартира',
  house: 'Дом',
  room: 'Комната',
};

export const ELECTRONICS_TYPE_LABELS: Record<string, string> = {
  phone: 'Телефон',
  laptop: 'Ноутбук',
  misc: 'Прочее',
};

export const CONDITION_LABELS: Record<string, string> = {
  new: 'Новое',
  used: 'Б/У',
};
