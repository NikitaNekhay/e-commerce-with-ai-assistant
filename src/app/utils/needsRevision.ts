// утилиты для определения "требуется доработка"
// объявление считается недоработанным если нет описания или не заполнены характеристики категории

import type { Item, ItemDetail, Category } from '../types/card';

// обязательные поля для каждой категории
const PARAM_FIELDS: Record<Category, string[]> = {
  auto: ['brand', 'model', 'yearOfManufacture', 'transmission', 'mileage', 'enginePower'],
  real_estate: ['type', 'address', 'area', 'floor'],
  electronics: ['type', 'brand', 'model', 'condition', 'color'],
};

const PARAM_LABELS: Record<string, string> = {
  brand: 'Бренд',
  model: 'Модель',
  yearOfManufacture: 'Год выпуска',
  transmission: 'Коробка передач',
  mileage: 'Пробег',
  enginePower: 'Мощность двигателя',
  type: 'Тип',
  address: 'Адрес',
  area: 'Площадь',
  floor: 'Этаж',
  condition: 'Состояние',
  color: 'Цвет',
};

// возвращает список русских названий незаполненных полей
export function getMissingFields(item: Item | ItemDetail): string[] {
  const missing: string[] = [];

  if (!item.description || item.description.trim() === '') {
    missing.push('Описание');
  }

  const fields = PARAM_FIELDS[item.category] || [];
  const params = item.params as Record<string, unknown>;

  for (const field of fields) {
    const value = params[field];
    if (value === undefined || value === null || value === '') {
      missing.push(PARAM_LABELS[field] || field);
    }
  }

  return missing;
}

export function computeNeedsRevision(item: Item | ItemDetail): boolean {
  return getMissingFields(item).length > 0;
}

// то же самое но возвращает имена полей (ключи), нужно для подсветки в форме редактирования
export function getMissingParamNames(item: Item | ItemDetail): { missingDescription: boolean; missingParams: string[] } {
  const missingDescription = !item.description || item.description.trim() === '';
  const fields = PARAM_FIELDS[item.category] || [];
  const params = item.params as Record<string, unknown>;
  const missingParams: string[] = [];

  for (const field of fields) {
    const value = params[field];
    if (value === undefined || value === null || value === '') {
      missingParams.push(field);
    }
  }

  return { missingDescription, missingParams };
}
