import { Button } from "antd";
import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useUserLoginMutation,
} from "../redux/feature/auth/authApi";

const Login = () => {
  const [login, { data, error }] = useLoginMutation();
  console.log("data=>", data);
  console.log("error=>", error);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">ID :</label>
        <input type="text" {...register("id")} />
        <label htmlFor="">Password: </label>
        <input type="text" {...register("password")} />
        <Button htmlType="submit">submit</Button>
      </form>
    </div>
  );
};

export default Login;
