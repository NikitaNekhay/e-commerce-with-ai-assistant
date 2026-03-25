import { Form, Input, Select } from 'antd';

export default function ElectronicsFields() {
  return (
    <>
      <Form.Item name={['params', 'type']} label="Тип" className="mb-3">
        <Select size="large" placeholder="Выберите тип" allowClear>
          <Select.Option value="phone">Телефон</Select.Option>
          <Select.Option value="laptop">Ноутбук</Select.Option>
          <Select.Option value="misc">Прочее</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={['params', 'brand']} label="Бренд" className="mb-3">
        <Input size="large" placeholder="Например: Apple" />
      </Form.Item>

      <Form.Item name={['params', 'model']} label="Модель" className="mb-3">
        <Input size="large" placeholder="Например: iPhone 15 Pro" />
      </Form.Item>

      <Form.Item name={['params', 'condition']} label="Состояние" className="mb-3">
        <Select size="large" placeholder="Выберите состояние" allowClear>
          <Select.Option value="new">Новое</Select.Option>
          <Select.Option value="used">Б/У</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={['params', 'color']} label="Цвет" className="mb-3">
        <Input size="large" placeholder="Например: Черный" />
      </Form.Item>
    </>
  );
}
