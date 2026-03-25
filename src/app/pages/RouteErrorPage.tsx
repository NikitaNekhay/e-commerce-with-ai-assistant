import { useRouteError, isRouteErrorResponse, Link } from 'react-router';
import { Button, Result } from 'antd';

export default function RouteErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status={error.status === 404 ? '404' : 'error'}
        title={error.status}
        subTitle={error.statusText || 'Страница не найдена'}
        extra={
          <Link to="/ads">
            <Button type="primary">На главную</Button>
          </Link>
        }
      />
    );
  }

  const message = error instanceof Error ? error.message : 'Произошла непредвиденная ошибка';

  return (
    <Result
      status="error"
      title="Что-то пошло не так"
      subTitle={message}
      extra={[
        <Button key="retry" type="primary" onClick={() => window.location.reload()}>
          Обновить страницу
        </Button>,
        <Link key="home" to="/ads">
          <Button>На главную</Button>
        </Link>,
      ]}
    />
  );
}
