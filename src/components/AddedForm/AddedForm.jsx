import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space } from "antd";
import "./AddedForm.css";
import PropTypes from "prop-types";
export default function AddedForm({
  placeholder,
  placeholder_name,
  placeholder_cost,
  placeholder_count,
  three_item,
  name_main,
  onClickAdd,
  onClickRem,
  onChange,
  value,
  id_name,
}) {
  return (
    <Form.List name={name_main}>
      {(fields, { add, remove }) => (
        <>
          <Form.Item>
            <span className="AddedFormSpan">{placeholder}:</span>
            <Button
              className="button_add"
              type="dashed"
              onClick={(event) => {
                add();
                onClickAdd?.(event);
                // onClickAddIndex?.(value[index])
              }}
              icon={<PlusOutlined />}
            ></Button>
          </Form.Item>
          {fields.map(({ key, name, ...restField }, index) => (
            <Space
              key={key}
              style={{
                display: "flex",
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item initialValue={index} {...restField} name={[name, "index"]}>
                <Input style={{width:'2rem'}} disabled/>
              </Form.Item>
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
                <Input placeholder={placeholder_name} onChange={(event) => onChange(event, value?.[index])} />
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
              <MinusCircleOutlined
                onClick={() => {
                  remove(name);
                  onClickRem?.(value?.[index]);
                }}
              />
            </Space>
          ))}
        </>
      )}
    </Form.List>
  );
}

AddedForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholder_name: PropTypes.string.isRequired,
  placeholder_cost: PropTypes.string.isRequired,
  three_item: PropTypes.bool,
  placeholder_count: PropTypes.string,
  name_main: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func,
  onClickRem: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  id_name: PropTypes.number,
};
