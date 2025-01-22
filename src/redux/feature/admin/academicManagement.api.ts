import { TResponse, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";

import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
        body: userInfo,
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log("inside redux", response);

        return {
          data: response?.data,
          mete: response?.meta,
        };
      },
    }),
    createSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useCreateSemesterMutation } =
  academicManagementApi;
