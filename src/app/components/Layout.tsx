// общий layout — хедер сверху + контент через Outlet (react-router)
import { Outlet } from 'react-router';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
