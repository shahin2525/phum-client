import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";
type TDateProps = {
  name: string;
  label?: string;
};

const PHTimePicker = ({ name, label }: TDateProps) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <TimePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHTimePicker;
