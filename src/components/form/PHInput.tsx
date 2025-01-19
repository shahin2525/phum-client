import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
  //   const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "16px" }}>
      {label ? label : null} :
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}

        //   <input type={type} id={name} {...register(name)} />
      />
    </div>
  );
};

export default PHInput;
