import { Input } from "antd";
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
      {label ? label : null} :
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
