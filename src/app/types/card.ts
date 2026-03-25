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

export interface ItemListEntry {
  id: number;
  category: Category;
  title: string;
  price: number;
  images?: string[];
  needsRevision: boolean;
}

export interface ItemDetail extends Item {
  needsRevision: boolean;
}

export interface ItemsListResponse {
  items: ItemListEntry[];
  total: number;
}

export interface ItemDetailResponse {
  items: ItemDetail[];
  total: number;
}

export interface ItemUpdatePayload {
  category: Category;
  title: string;
  description?: string;
  price: number;
  params: ItemParams;
  images?: string[];
}

export interface ItemsQueryParams {
  q?: string;
  limit?: number;
  skip?: number;
  needsRevision?: boolean;
  categories?: Category[];
  sortColumn?: 'title' | 'createdAt' | 'price';
  sortDirection?: 'asc' | 'desc';
}

export interface MarketPriceInfo {
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  reasoning: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
