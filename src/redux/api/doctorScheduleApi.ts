import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorSchedulesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctorSchedule: build.mutation({
      query: (data) => ({
        url: "/doctor-schedule",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.doctorSchedule, tagTypes.schedules],
    }),
    getAllDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta, arg) => {
        return {
          doctorSchedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctorSchedule],
    }),
    getMySchedules: build.query({
      query: (id: string) => ({
        url: `/doctor-schedule/my-schedules`,
        method: "GET",
      }),
      providesTags: [tagTypes.doctorSchedule],
    }),
    deleteDoctorSchedule: build.mutation({
      query: (id: string) => ({
        url: `/doctor-schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctorSchedule],
    }),
  }),
});

export const {
  useCreateDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
  useGetMySchedulesQuery,
  useDeleteDoctorScheduleMutation,
} = doctorSchedulesApi;
