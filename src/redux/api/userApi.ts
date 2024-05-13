import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IDoctor } from "@/types/doctor";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query({
      query: (id) => ({
        url: `/user/me`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = userApi;
