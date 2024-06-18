"use server";
import { authKey } from "@/constants/authkey";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAccessToken = (token: string, option?: any) => {
  console.log({ token });
  const decodedData = jwtDecode(token) as any;
  const isUserPatient = decodedData.role === "patient";
  console.log(isUserPatient);
  console.log(decodedData);
  cookies().set(authKey, token);
  if (option && option.passwordChangeRequired && !isUserPatient) {
    redirect("/dashboard/change-password");
  }
  if (
    option &&
    option.redirect &&
    (!option.passwordChangeRequired || isUserPatient)
  ) {
    redirect(option.redirect);
  }
};
