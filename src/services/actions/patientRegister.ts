export const patientRegister = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );
  const patientInfo = res.json();
  return patientInfo;
};
