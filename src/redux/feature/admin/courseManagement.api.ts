import { TQueryParam, TResponseRedux } from "../../../types";
import { TSemesterRegistration } from "../../../types/courseManagement.type";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesterRegistration: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (
        response: TResponseRedux<TSemesterRegistration[]>
      ) => {
        // console.log("inside redux", response);

        return {
          data: response?.data,
          mete: response?.meta,
        };
      },
    }),
    //
    createSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    //
    updateSemesterRegistration: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
  }),
});

export const {
  useCreateSemesterRegistrationMutation,
  useGetAllSemesterRegistrationQuery,
  useUpdateSemesterRegistrationMutation,
} = courseManagementApi;
