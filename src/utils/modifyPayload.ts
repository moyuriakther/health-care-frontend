export const modifyPayload = (payload: any) => {
  const values = { ...payload };
  const file = values["file"]; //get file from values object
  delete values["file"]; //delete file from values object
  const data = JSON.stringify(values);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file as Blob);
  return formData;
};
