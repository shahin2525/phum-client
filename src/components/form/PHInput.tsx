import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInput = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInput) => {
  //   const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "16px" }}>
      {/* {label ? label : null} : */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
