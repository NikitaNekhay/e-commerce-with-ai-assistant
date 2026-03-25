import { Link } from 'react-router';
import { Button, Result } from 'antd';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница не найдена."
        extra={
          <Link to="/ads">
            <Button type="primary" size="large">
              Вернуться к объявлениям
            </Button>
          </Link>
        }
      />
    </div>
  );
}