import { authKey } from "@/constants/authkey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { setAccessToken } from "./setAccessToken";

export const userLogin = async (formData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
    credentials: "include",
  });
  const userInfo = await res.json();
  console.log(userInfo?.data);

  const passwordChangeRequired = userInfo.data.needPasswordChange;

  if (userInfo?.data?.accessToken) {
    setAccessToken(userInfo?.data?.accessToken, {
      redirect: "/dashboard",
      passwordChangeRequired,
    });
  }
  return userInfo;
};
