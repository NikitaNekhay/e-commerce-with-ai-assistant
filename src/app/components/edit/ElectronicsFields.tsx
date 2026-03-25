// поля характеристик для категории "электроника"
// revisionFields — набор полей требующих доработки, подсвечиваются warning
import { Form, Input, Select } from 'antd';

interface ElectronicsFieldsProps {
  revisionFields?: Set<string>;
}

export default function ElectronicsFields({ revisionFields }: ElectronicsFieldsProps) {
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
          <Select.Option value="phone">Телефон</Select.Option>
          <Select.Option value="laptop">Ноутбук</Select.Option>
          <Select.Option value="misc">Прочее</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['params', 'brand']}
        label="Бренд"
        className="mb-3"
        validateStatus={revisionFields?.has('brand') ? 'warning' : undefined}
        help={revisionFields?.has('brand') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: Apple" allowClear maxLength={100} />
      </Form.Item>

      <Form.Item
        name={['params', 'model']}
        label="Модель"
        className="mb-3"
        validateStatus={revisionFields?.has('model') ? 'warning' : undefined}
        help={revisionFields?.has('model') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: iPhone 15 Pro" allowClear maxLength={100} />
      </Form.Item>

      <Form.Item
        name={['params', 'condition']}
        label="Состояние"
        className="mb-3"
        validateStatus={revisionFields?.has('condition') ? 'warning' : undefined}
        help={revisionFields?.has('condition') ? 'Поле требует доработок' : undefined}
      >
        <Select size="large" placeholder="Выберите состояние">
          <Select.Option value="new">Новое</Select.Option>
          <Select.Option value="used">Б/У</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['params', 'color']}
        label="Цвет"
        className="mb-3"
        validateStatus={revisionFields?.has('color') ? 'warning' : undefined}
        help={revisionFields?.has('color') ? 'Поле требует доработок' : undefined}
      >
        <Input size="large" placeholder="Например: Черный" allowClear maxLength={50} />
      </Form.Item>
    </>
  );
}
