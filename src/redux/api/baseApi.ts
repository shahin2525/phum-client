import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../feature/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 404) {
    toast.error(result.error.data.message);
  }
  // console.log(result);
  if (result?.error && result.error.status === 401) {
    console.log("send refresh token");

    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      console.log(user);
      api.dispatch(
        setUser({
          user,
          token: data?.data?.accessToken,
        })
      );
    } else {
      api.dispatch(logout());
    }

    // console.log(refreshResult);
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
