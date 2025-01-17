import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = authApi;
