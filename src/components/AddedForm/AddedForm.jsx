import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space } from "antd";
import "./AddedForm.css";
import PropTypes from "prop-types";
// ИЗБАВИТЬСЯ ОТ ВЛОЖЕНОСТИ ФОРМ
export default function AddedForm({
  placeholder,
  placeholder_name,
  placeholder_cost,
  placeholder_count,
  three_item,
  name_main,
  name_form

}) {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      name={name_form}
      onFinish={onFinish}
      style={{
        maxWidth: 400,
      }}
      autoComplete="off"
    >
      <Form.List name={name_main}>
        {(fields, { add, remove }) => (
          <>
            <Form.Item>
              <span className="AddedFormSpan">{placeholder}:</span>
              <Button
                className="button_add"
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              ></Button>
            </Form.Item>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing name",
                    },
                  ]}
                >
                  <Input placeholder={placeholder_name} />
                </Form.Item>
                {three_item && (
                  <Form.Item
                    {...restField}
                    name={[name, "name_count"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing count",
                      },
                    ]}
                  >
                    <InputNumber placeholder={placeholder_count} />
                  </Form.Item>
                )}
                <Form.Item
                  {...restField}
                  name={[name, "name_cost"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing cost",
                    },
                  ]}
                >
                  <InputNumber placeholder={placeholder_cost} />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
          </>
        )}
      </Form.List>
    </Form>
  );
}

AddedForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholder_name: PropTypes.string.isRequired,
  placeholder_cost: PropTypes.string.isRequired,
  three_item: PropTypes.bool.isRequired,
  placeholder_count: PropTypes.bool.isRequired,
  name_main: PropTypes.string.isRequired,
  name_form: PropTypes.string.isRequired,
};
