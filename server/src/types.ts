export type Category = 'auto' | 'real_estate' | 'electronics';

export interface AutoItemParams {
  brand?: string;
  model?: string;
  yearOfManufacture?: number;
  transmission?: 'automatic' | 'manual';
  mileage?: number;
  enginePower?: number;
}

export interface RealEstateItemParams {
  type?: 'flat' | 'house' | 'room';
  address?: string;
  area?: number;
  floor?: number;
}

export interface ElectronicsItemParams {
  type?: 'phone' | 'laptop' | 'misc';
  brand?: string;
  model?: string;
  condition?: 'new' | 'used';
  color?: string;
}

export type ItemParams = AutoItemParams | RealEstateItemParams | ElectronicsItemParams;

export interface Item {
  id: number;
  category: Category;
  title: string;
  description?: string;
  price: number;
  params: ItemParams;
  images?: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface ItemUpdateIn {
  category: Category;
  title: string;
  description?: string;
  price: number;
  params: ItemParams;
}

export interface ItemListEntry {
  id: number;
  category: Category;
  title: string;
  price: number;
  needsRevision: boolean;
}

export interface ItemsListResponse {
  items: ItemListEntry[];
  total: number;
}

export interface ItemDetailResponse {
  items: (Item & { needsRevision: boolean })[];
  total: number;
}
