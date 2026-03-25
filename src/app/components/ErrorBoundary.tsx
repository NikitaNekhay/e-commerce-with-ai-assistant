// глобальный обработчик ошибок — ловит необработанные исключения в react-дереве
// class component потому что getDerivedStateFromError работает только в классах
import { Component, type ReactNode } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Что-то пошло не так"
          subTitle={this.state.error?.message || 'Произошла непредвиденная ошибка'}
          extra={[
            <Button key="retry" type="primary" onClick={this.handleReset}>
              Попробовать снова
            </Button>,
            <Link key="home" to="/ads">
              <Button>На главную</Button>
            </Link>,
          ]}
        />
      );
    }

    return this.props.children;
  }
}
