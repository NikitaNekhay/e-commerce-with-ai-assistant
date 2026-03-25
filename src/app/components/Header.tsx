// шапка сайта — навигация + переключатель темы
import { Link, useLocation } from 'react-router';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isAdsPage = location.pathname === '/ads' || location.pathname === '/';

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/ads" className="text-xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 transition-colors duration-200">
            Avito Seller Dashboard
          </Link>

          <div className="flex gap-6 items-center">
            <Link
              to="/ads"
              className={`text-base relative px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isAdsPage
                  ? 'text-blue-600 font-medium bg-blue-50 dark:bg-blue-900/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95'
              }`}
            >
              Мои объявления
            </Link>

            <Button
              type="text"
              icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
