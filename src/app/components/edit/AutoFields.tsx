import { Form, Input, InputNumber, Select } from 'antd';

interface AutoFieldsProps {
  revisionFields?: Set<string>;
}

export default function AutoFields({ revisionFields }: AutoFieldsProps) {
  return (
    <>
      <Form.Item
        name={['params', 'brand']}
        label="Бренд"
        className="mb-3"
        validateStatus={revisionFields?.has('brand') ? 'warning' : undefined}
        help={revisionFields?.has('brand') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: Toyota" allowClear />
      </Form.Item>

      <Form.Item
        name={['params', 'model']}
        label="Модель"
        className="mb-3"
        validateStatus={revisionFields?.has('model') ? 'warning' : undefined}
        help={revisionFields?.has('model') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: Camry" allowClear />
      </Form.Item>

      <Form.Item
        name={['params', 'yearOfManufacture']}
        label="Год выпуска"
        className="mb-3"
        validateStatus={revisionFields?.has('yearOfManufacture') ? 'warning' : undefined}
        help={revisionFields?.has('yearOfManufacture') ? 'Поле требует доработок' : undefined}
      >
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 2023" min={1900} max={2030} />
      </Form.Item>

      <Form.Item
        name={['params', 'transmission']}
        label="Коробка передач"
        className="mb-3"
        validateStatus={revisionFields?.has('transmission') ? 'warning' : undefined}
        help={revisionFields?.has('transmission') ? 'Поле требует доработок' : undefined}
      >
        <Select size="large" placeholder="Выберите тип КПП">
          <Select.Option value="automatic">Автоматическая</Select.Option>
          <Select.Option value="manual">Механическая</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['params', 'mileage']}
        label="Пробег (км)"
        className="mb-3"
        validateStatus={revisionFields?.has('mileage') ? 'warning' : undefined}
        help={revisionFields?.has('mileage') ? 'Поле требует доработок' : undefined}
      >
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 50000" min={0} />
      </Form.Item>

      <Form.Item
        name={['params', 'enginePower']}
        label="Мощность двигателя (л.с.)"
        className="mb-3"
        validateStatus={revisionFields?.has('enginePower') ? 'warning' : undefined}
        help={revisionFields?.has('enginePower') ? 'Поле требует доработок' : undefined}
      >
        <InputNumber size="large" style={{ width: '100%' }} placeholder="Например: 150" min={0} />
      </Form.Item>
    </>
  );
}
