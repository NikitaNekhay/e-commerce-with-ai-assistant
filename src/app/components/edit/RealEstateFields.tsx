import { Form, Input, InputNumber, Select } from 'antd';

interface RealEstateFieldsProps {
  revisionFields?: Set<string>;
}

export default function RealEstateFields({ revisionFields }: RealEstateFieldsProps) {
  return (
    <>
      <Form.Item
        name={['params', 'type']}
        label="Тип"
        className="mb-3"
        validateStatus={revisionFields?.has('type') ? 'warning' : undefined}
        help={revisionFields?.has('type') ? 'Поле требует доработок' : undefined}
      >
        <Select size="large" placeholder="Выберите тип">
          <Select.Option value="flat">Квартира</Select.Option>
          <Select.Option value="house">Дом</Select.Option>
          <Select.Option value="room">Комната</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['params', 'address']}
        label="Адрес"
        className="mb-3"
        validateStatus={revisionFields?.has('address') ? 'warning' : undefined}
        help={revisionFields?.has('address') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: Москва, ул. Тверская, д. 15" allowClear />
      </Form.Item>

      <Form.Item
        name={['params', 'area']}
        label="Площадь (м²)"
        className="mb-3"
        validateStatus={revisionFields?.has('area') ? 'warning' : undefined}
        help={revisionFields?.has('area') ? 'Поле требует доработок' : undefined}
      >
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 45" min={0} />
      </Form.Item>

      <Form.Item
        name={['params', 'floor']}
        label="Этаж"
        className="mb-3"
        validateStatus={revisionFields?.has('floor') ? 'warning' : undefined}
        help={revisionFields?.has('floor') ? 'Поле требует доработок' : undefined}
      >
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 5" min={0} />
      </Form.Item>
    </>
  );
}
