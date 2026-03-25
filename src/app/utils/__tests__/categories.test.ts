import { describe, it, expect } from 'vitest';
import { CATEGORY_LABELS, CATEGORY_OPTIONS, TRANSMISSION_LABELS, CONDITION_LABELS } from '../categories';

describe('CATEGORY_LABELS', () => {
  it('maps all three categories', () => {
    expect(CATEGORY_LABELS.auto).toBe('Транспорт');
    expect(CATEGORY_LABELS.real_estate).toBe('Недвижимость');
    expect(CATEGORY_LABELS.electronics).toBe('Электроника');
  });
});

describe('CATEGORY_OPTIONS', () => {
  it('contains three options', () => {
    expect(CATEGORY_OPTIONS).toHaveLength(3);
  });

  it('each option has value and label', () => {
    for (const opt of CATEGORY_OPTIONS) {
      expect(opt).toHaveProperty('value');
      expect(opt).toHaveProperty('label');
      expect(typeof opt.value).toBe('string');
      expect(typeof opt.label).toBe('string');
    }
  });
});

describe('TRANSMISSION_LABELS', () => {
  it('maps transmission types', () => {
    expect(TRANSMISSION_LABELS.automatic).toBe('Автоматическая');
    expect(TRANSMISSION_LABELS.manual).toBe('Механическая');
  });
});

describe('CONDITION_LABELS', () => {
  it('maps condition types', () => {
    expect(CONDITION_LABELS.new).toBe('Новое');
    expect(CONDITION_LABELS.used).toBe('Б/У');
  });
});
