import { authKey } from "@/constants/authkey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";

export const logoutUser = (router: AppRouterInstance) => {
  deleteCookies([authKey, "refreshToken"]);
  localStorage.removeItem(authKey);
  console.log("logout user");
  // cookies().delete(authKey);
  router.push("/");
  router.refresh();
};
