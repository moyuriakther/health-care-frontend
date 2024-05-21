import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const schedulesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.schedules],
    }),
    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta, arg) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedules],
    }),
    getSingleSchedule: build.query({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "GET",
      }),
    }),
    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedules],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useGetSingleScheduleQuery,
  useDeleteScheduleMutation,
} = schedulesApi;
