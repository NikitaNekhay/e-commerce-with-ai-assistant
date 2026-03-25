import { Form, Input, Select } from 'antd';

export default function ElectronicsFields() {
  return (
    <>
      <Form.Item name={['params', 'type']} label="Тип" className="mb-3">
        <Select size="large" placeholder="Выберите тип">
          <Select.Option value="phone">Телефон</Select.Option>
          <Select.Option value="laptop">Ноутбук</Select.Option>
          <Select.Option value="misc">Прочее</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={['params', 'brand']} label="Бренд" className="mb-3">
        <Input size="large" placeholder="Например: Apple" allowClear />
      </Form.Item>

      <Form.Item name={['params', 'model']} label="Модель" className="mb-3">
        <Input size="large" placeholder="Например: iPhone 15 Pro" allowClear />
      </Form.Item>

      <Form.Item name={['params', 'condition']} label="Состояние" className="mb-3">
        <Select size="large" placeholder="Выберите состояние">
          <Select.Option value="new">Новое</Select.Option>
          <Select.Option value="used">Б/У</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={['params', 'color']} label="Цвет" className="mb-3">
        <Input size="large" placeholder="Например: Черный" allowClear />
      </Form.Item>
    </>
  );
}
