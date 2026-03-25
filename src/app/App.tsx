// корневой компонент приложения
// оборачиваем всё в провайдеры: ErrorBoundary -> Redux -> Theme -> Ant ConfigProvider -> Router
// порядок важен — theme нужен для ant design, redux для данных, errorboundary ловит всё

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { ConfigProvider, theme as antTheme } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { store } from './store';
import { router } from './routes';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// внутренний компонент — нужен чтобы useTheme был доступен (он внутри ThemeProvider)
function AppInner() {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        algorithm: theme === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <AppInner />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}
