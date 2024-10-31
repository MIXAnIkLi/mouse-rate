import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import "./AddedForm.css";
import PropTypes from "prop-types";

export default function AddedForm({
  placeholder,
  placeholder_name,
  placeholder_cost,
  placeholder_count,
  three_item,
}) {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      style={{
        maxWidth: 400,
      }}
      autoComplete="off"
    >
      <Form.List name="users">
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
                <Form.Item {...restField} name='name'>
                  <Input placeholder={placeholder_name} />
                </Form.Item>
                {three_item && (
                  <Form.Item {...restField} name='count'>
                    <Input placeholder={placeholder_count} />
                  </Form.Item>
                )}
                <Form.Item {...restField} name='cost'>
                  <Input placeholder={placeholder_cost} />
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
};
