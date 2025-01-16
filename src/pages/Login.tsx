import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// type UserData = {
//   id: string;
//   password: string;
// };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  // console.log("data=>", data);
  // console.log("error=>", error);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: FieldValues) => {
    // const toastId = toast.loading("loading user logging");
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      // toast.success("user logged in", { id: toastId, duration: 2000 });
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      // toast.error(`something went wrong with${error}`, {
      //   id: toastId,
      //   duration: 2000,
      // });
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  // const onSubmit = async (data: FieldValues) => {
  //   console.log(data);
  //   const toastId = toast.loading("Logging in");

  //   try {
  //     const userInfo = {
  //       id: data.userId,
  //       password: data.password,
  //     };
  //     const res = await login(userInfo).unwrap();
  //     const user = verifyToken(res.data.accessToken) as TUser;
  //     dispatch(setUser({ user: user, token: res.data.accessToken }));
  //     toast.success("Logged in", { id: toastId, duration: 2000 });
  //     navigate(`/${user.role}/dashboard`);
  //   } catch (err) {
  //     toast.error("Something went wrong", { id: toastId, duration: 2000 });
  //   }
  // };
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
