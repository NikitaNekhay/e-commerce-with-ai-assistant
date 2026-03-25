import { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import { Input, Select, Switch, Pagination, Alert, Spin, Empty, Checkbox } from 'antd';
import { SearchOutlined, AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchAds, setQuery, setPage, resetFilters, PAGE_SIZE_CONST } from '../store/cardsSlice';
import { CATEGORY_LABELS, CATEGORY_OPTIONS } from '../utils/categories';
import type { Category, ItemsQueryParams } from '../types/card';

type SortOption = 'titleAsc' | 'titleDesc' | 'createdAtDesc' | 'createdAtAsc' | 'priceAsc' | 'priceDesc';

const SORT_MAP: Record<SortOption, Pick<ItemsQueryParams, 'sortColumn' | 'sortDirection'>> = {
  titleAsc: { sortColumn: 'title', sortDirection: 'asc' },
  titleDesc: { sortColumn: 'title', sortDirection: 'desc' },
  createdAtDesc: { sortColumn: 'createdAt', sortDirection: 'desc' },
  createdAtAsc: { sortColumn: 'createdAt', sortDirection: 'asc' },
  priceAsc: { sortColumn: 'price', sortDirection: 'asc' },
  priceDesc: { sortColumn: 'price', sortDirection: 'desc' },
};

export default function CardsPage() {
  const dispatch = useAppDispatch();
  const { items, total, loading, error, query, currentPage } = useAppSelector((state) => state.ads);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('createdAtDesc');
  const [needsRevision, setNeedsRevision] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const debounceTimer = useRef<ReturnType<typeof setTimeout>>();

  // Debounced search
  const debouncedSearch = useCallback((value: string) => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      dispatch(setPage(1));
      dispatch(setQuery({ q: value || undefined }));
    }, 300);
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  // Fetch when query or page changes
  useEffect(() => {
    const promise = dispatch(fetchAds(query));
    return () => { promise.abort(); };
  }, [dispatch, query]);

  // Sort change
  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    const sort = SORT_MAP[value];
    dispatch(setPage(1));
    dispatch(setQuery({ ...sort }));
  };

  // Category filter change
  const handleCategoryChange = (values: Category[]) => {
    setSelectedCategories(values);
    dispatch(setPage(1));
    dispatch(setQuery({ categories: values.length > 0 ? values : undefined }));
  };

  // Needs revision toggle
  const handleRevisionToggle = (checked: boolean) => {
    setNeedsRevision(checked);
    dispatch(setPage(1));
    dispatch(setQuery({ needsRevision: checked || undefined }));
  };

  // Page change
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(setQuery({ skip: (page - 1) * PAGE_SIZE_CONST }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchInput('');
    setSelectedCategories([]);
    setNeedsRevision(false);
    setSortBy('createdAtDesc');
    dispatch(resetFilters());
  };

  const hasActiveFilters = searchInput || selectedCategories.length > 0 || needsRevision || sortBy !== 'createdAtDesc';

  if (error) {
    return (
      <div className="p-8">
        <Alert
          message="Ошибка загрузки"
          description={error}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium mb-1">Мои объявления</h1>
          <p className="text-gray-500 dark:text-gray-400">{total} объявлений</p>
        </div>

        {/* Top bar: Search + View Toggle + Sort */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-colors">
          <div className="flex gap-4 items-center flex-wrap">
            <Input
              size="large"
              placeholder="Найти объявление..."
              prefix={<SearchOutlined />}
              value={searchInput}
              onChange={handleSearchChange}
              allowClear
              className="flex-1 min-w-[200px]"
            />

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                <AppstoreOutlined />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                <UnorderedListOutlined />
              </button>
            </div>

            {/* Sort */}
            <Select
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: 280 }}
            >
              <Select.Option value="createdAtDesc">По новизне (сначала новые)</Select.Option>
              <Select.Option value="createdAtAsc">По новизне (сначала старые)</Select.Option>
              <Select.Option value="priceAsc">По цене (сначала дешевле)</Select.Option>
              <Select.Option value="priceDesc">По цене (сначала дороже)</Select.Option>
              <Select.Option value="titleAsc">По названию (А → Я)</Select.Option>
              <Select.Option value="titleDesc">По названию (Я → А)</Select.Option>
            </Select>
          </div>
        </div>

        {/* Main content: Sidebar + Cards */}
        <div className="flex gap-4 items-start">
          {/* Left sidebar: Filters */}
          <div className="w-[240px] shrink-0 flex flex-col gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="font-semibold mb-4">Фильтры</h3>

              <div className="mb-4">
                <label className="block mb-2 font-medium">Категория</label>
                <Checkbox.Group
                  value={selectedCategories}
                  onChange={(values) => handleCategoryChange(values as Category[])}
                >
                  <div className="flex flex-col gap-2">
                    {CATEGORY_OPTIONS.map((opt) => (
                      <Checkbox key={opt.value} value={opt.value}>
                        {opt.label}
                      </Checkbox>
                    ))}
                  </div>
                </Checkbox.Group>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  checked={needsRevision}
                  onChange={handleRevisionToggle}
                />
                <span className="text-sm">Только требующие доработок</span>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm px-6 py-3 text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Сбросить фильтры
              </button>
            )}
          </div>

          {/* Right: Cards Grid/List + Pagination */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Spin size="large" />
              </div>
            ) : items.length === 0 ? (
              <Empty description="Объявления не найдены" />
            ) : (
              <>
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'flex flex-col gap-4'
                }>
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/ads/${item.id}`}
                      className="block"
                    >
                      {viewMode === 'grid' ? (
                        <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="bg-[#fafafa] h-48 flex items-center justify-center">
                            <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                          </div>
                          <div className="p-4">
                            <div className="mb-2">
                              <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                                {CATEGORY_LABELS[item.category]}
                              </span>
                            </div>
                            <h3 className="font-medium text-lg mb-2 truncate">{item.title}</h3>
                            <p className="text-2xl font-semibold mb-2">{item.price.toLocaleString('ru-RU')} ₽</p>
                            {item.needsRevision && (
                              <div className="mt-3 p-2 bg-orange-50 rounded text-sm">
                                <span className="text-orange-600 font-medium">⚠ Требует доработок</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex">
                          <div className="bg-[#fafafa] w-48 h-32 flex items-center justify-center shrink-0">
                            <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                          </div>
                          <div className="p-4 flex-1 flex items-center justify-between">
                            <div>
                              <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded mb-1">
                                {CATEGORY_LABELS[item.category]}
                              </span>
                              <h3 className="font-medium text-lg">{item.title}</h3>
                              {item.needsRevision && (
                                <span className="text-orange-600 text-sm font-medium">⚠ Требует доработок</span>
                              )}
                            </div>
                            <p className="text-2xl font-semibold">{item.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {total > PAGE_SIZE_CONST && (
                  <div className="mt-6 flex justify-start">
                    <Pagination
                      current={currentPage}
                      total={total}
                      pageSize={PAGE_SIZE_CONST}
                      onChange={handlePageChange}
                      showSizeChanger={false}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
