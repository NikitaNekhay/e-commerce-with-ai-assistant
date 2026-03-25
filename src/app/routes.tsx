// роутинг приложения
// / -> редирект на /ads
// /ads -> список объявлений
// /ads/:id -> детальная страница объявления
// /ads/:id/edit -> редактирование
// * -> 404
// Layout оборачивает все страницы (хедер + контент)

import { createBrowserRouter, Navigate } from 'react-router';
import Layout from './components/Layout';
import CardsPage from './pages/CardsPage';
import CardDetailPage from './pages/CardDetailPage';
import CardEditPage from './pages/CardEditPage';
import NotFoundPage from './pages/NotFoundPage';
import RouteErrorPage from './pages/RouteErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/ads" replace />,
      },
      {
        path: 'ads',
        element: <CardsPage />,
        errorElement: <RouteErrorPage />,
      },
      {
        path: 'ads/:id',
        element: <CardDetailPage />,
        errorElement: <RouteErrorPage />,
      },
      {
        path: 'ads/:id/edit',
        element: <CardEditPage />,
        errorElement: <RouteErrorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
