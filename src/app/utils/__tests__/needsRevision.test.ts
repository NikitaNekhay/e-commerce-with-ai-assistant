import { describe, it, expect } from 'vitest';
import { computeNeedsRevision, getMissingFields } from '../needsRevision';
import type { Item } from '../../types/card';

const makeItem = (overrides: Partial<Item> = {}): Item => ({
  id: 1,
  category: 'electronics',
  title: 'Test Item',
  price: 1000,
  params: {},
  createdAt: '2025-03-10T00:00:00.000Z',
  ...overrides,
});

describe('computeNeedsRevision', () => {
  it('returns true when description is missing', () => {
    const item = makeItem({ params: { type: 'phone', brand: 'Apple', model: 'iPhone', condition: 'new', color: 'Black' } });
    expect(computeNeedsRevision(item)).toBe(true);
  });

  it('returns true when description is empty string', () => {
    const item = makeItem({ description: '', params: { type: 'phone', brand: 'Apple', model: 'iPhone', condition: 'new', color: 'Black' } });
    expect(computeNeedsRevision(item)).toBe(true);
  });

  it('returns true when params are missing', () => {
    const item = makeItem({ description: 'Some description', params: { type: 'phone' } });
    expect(computeNeedsRevision(item)).toBe(true);
  });

  it('returns false when all fields are filled (electronics)', () => {
    const item = makeItem({
      description: 'Full description',
      params: { type: 'phone', brand: 'Apple', model: 'iPhone', condition: 'new', color: 'Black' },
    });
    expect(computeNeedsRevision(item)).toBe(false);
  });

  it('returns false when all fields are filled (auto)', () => {
    const item = makeItem({
      category: 'auto',
      description: 'Car description',
      params: { brand: 'Toyota', model: 'Camry', yearOfManufacture: 2023, transmission: 'automatic', mileage: 50000, enginePower: 200 },
    });
    expect(computeNeedsRevision(item)).toBe(false);
  });

  it('returns false when all fields are filled (real_estate)', () => {
    const item = makeItem({
      category: 'real_estate',
      description: 'Apartment description',
      params: { type: 'flat', address: 'Moscow', area: 50, floor: 3 },
    });
    expect(computeNeedsRevision(item)).toBe(false);
  });
});

describe('getMissingFields', () => {
  it('returns Описание when description is missing', () => {
    const item = makeItem({ params: { type: 'phone', brand: 'Apple', model: 'iPhone', condition: 'new', color: 'Black' } });
    expect(getMissingFields(item)).toContain('Описание');
  });

  it('returns specific missing param labels for electronics', () => {
    const item = makeItem({ description: 'desc', params: { type: 'phone' } });
    const missing = getMissingFields(item);
    expect(missing).toContain('Бренд');
    expect(missing).toContain('Модель');
    expect(missing).toContain('Состояние');
    expect(missing).toContain('Цвет');
    expect(missing).not.toContain('Тип');
  });

  it('returns specific missing param labels for auto', () => {
    const item = makeItem({ category: 'auto', description: 'desc', params: { brand: 'Toyota' } });
    const missing = getMissingFields(item);
    expect(missing).toContain('Модель');
    expect(missing).toContain('Год выпуска');
    expect(missing).toContain('Коробка передач');
    expect(missing).toContain('Пробег');
    expect(missing).toContain('Мощность двигателя');
    expect(missing).not.toContain('Бренд');
  });

  it('returns empty array when everything is filled', () => {
    const item = makeItem({
      description: 'Full',
      params: { type: 'phone', brand: 'Apple', model: 'iPhone', condition: 'new', color: 'Black' },
    });
    expect(getMissingFields(item)).toHaveLength(0);
  });
});
