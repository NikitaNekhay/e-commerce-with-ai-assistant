import { Form, Input, InputNumber, Select } from 'antd';

export default function RealEstateFields() {
  return (
    <>
      <Form.Item name={['params', 'type']} label="Тип" className="mb-3">
        <Select size="large" placeholder="Выберите тип">
          <Select.Option value="flat">Квартира</Select.Option>
          <Select.Option value="house">Дом</Select.Option>
          <Select.Option value="room">Комната</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={['params', 'address']} label="Адрес" className="mb-3">
        <Input size="large" placeholder="Например: Москва, ул. Тверская, д. 15" allowClear />
      </Form.Item>

      <Form.Item name={['params', 'area']} label="Площадь (м²)" className="mb-3">
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 45" min={0} />
      </Form.Item>

      <Form.Item name={['params', 'floor']} label="Этаж" className="mb-3">
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 5" min={0} />
      </Form.Item>
    </>
  );
}
