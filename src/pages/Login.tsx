import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
type UserData = {
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  // console.log("data=>", data);
  // console.log("error=>", error);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: UserData) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(res);
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
