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

function deriveSortOption(query: ItemsQueryParams): SortOption {
  for (const [key, val] of Object.entries(SORT_MAP)) {
    if (val.sortColumn === query.sortColumn && val.sortDirection === query.sortDirection) {
      return key as SortOption;
    }
  }
  return 'createdAtDesc';
}

export default function CardsPage() {
  const dispatch = useAppDispatch();
  const { items, total, loading, error, query, currentPage } = useAppSelector((state) => state.ads);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>(() => deriveSortOption(query));
  const [needsRevision, setNeedsRevision] = useState(() => query.needsRevision || false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(() => query.categories || []);
  const [searchInput, setSearchInput] = useState(() => query.q || '');
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
              suffix={<SearchOutlined />}
              value={searchInput}
              onChange={handleSearchChange}
              allowClear
              className="flex-1 min-w-[200px] !bg-[#F6F6F8]"
            />

            {/* View Mode Toggle */}
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${viewMode === 'grid' ? '!text-blue-500 text-white shadow-sm scale-105' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                <AppstoreOutlined />
              </button>

            {/* Divider */}
              <div className="w-[2.5px] h-auto bg-white mx-0" />

              <button
                onClick={() => setViewMode('list')}
                className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${viewMode === 'list' ? '!text-blue-500 text-white shadow-sm scale-105' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                <UnorderedListOutlined />
              </button>
            </div>

            {/* Sort */}
            <Select
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: 280 }}
              
              className=" !bg-white 
              !border-4 
              !border-gray-100
              !rounded-md
              hover:!border-gray-300
               active:!border-gray-300
               !outline-border-gray-300"
              
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
                <label className="block mb-2">Категория</label>
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
        <div className="h-px bg-gray-200 dark:bg-gray-600 mb-2"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Только требующие доработок</span>
                <Switch
                  checked={needsRevision}
                  onChange={handleRevisionToggle}
                />
              </div>
            </div>

            <button
              onClick={handleResetFilters}
              disabled={!hasActiveFilters}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm px-6 py-3 transition-all duration-200 text-sm font-medium ${
                hasActiveFilters
                  ? 'cursor-pointer text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:shadow-md active:scale-95'
                  : 'cursor-default text-gray-400 dark:text-gray-500'
              }`}
            >
              Сбросить фильтры
            </button>
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
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
                    : 'flex flex-col gap-4'
                }>
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/ads/${item.id}`}
                      className="block"
                    >
                      {viewMode === 'grid' ? (
                        <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 h-[270px] flex flex-col">
                          <div className="bg-[#fafafa] dark:bg-gray-700 h-[140px] flex items-center justify-center shrink-0 overflow-hidden">
                            {item.images && item.images.length > 0 ? (
                              <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                            ) : (
                              <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                              </svg>
                            )}
                          </div>
                          <div className="p-3 flex flex-col flex-1">
                            <div className="relative bottom-7 -mb-3">
                              <span className="inline-block px-2 py-1 dark:bg-gray-700 border-2 border-[#d9d9d9] bg-white dark:text-gray-300 text-xs rounded-md">
                                {CATEGORY_LABELS[item.category]}
                              </span>
                            </div>
                            <h3 className="font-medium text-sm mb-1 truncate">{item.title}</h3>
                            <p className="text-lg text-black/50 mb-1 font-semibold">{item.price.toLocaleString('ru-RU')} ₽</p>
                            <div className="">
                              {item.needsRevision ? (
                                <div className="p-1.5 bg-[#f9f1e6] rounded-md text-xs w-fit">
                                  <span className="text-[#FFA940] font-medium">• Требует доработок</span>
                                </div>
                              ) : (
                                <div className="h-[28px]" />
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 flex">
                          <div className="bg-[#fafafa] dark:bg-gray-700 w-48 h-32 flex items-center justify-center shrink-0 overflow-hidden">
                            {item.images && item.images.length > 0 ? (
                              <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                            ) : (
                              <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                              </svg>
                            )}
                          </div>
                          <div className="p-4 flex-1 flex items-center justify-between">
                            <div>
                              <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-xs rounded mb-1">
                                {CATEGORY_LABELS[item.category]}
                              </span>
                              <h3 className="font-medium text-lg">{item.title}</h3>
                              {item.needsRevision && (
                                <span className="text-[#FFA940] text-sm font-medium">⚠ Требует доработок</span>
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
