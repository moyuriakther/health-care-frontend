import { FieldValues } from "react-hook-form";

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
  return userInfo;
};
