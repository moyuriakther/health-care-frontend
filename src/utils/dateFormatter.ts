export const dateFormatter = (payload: string) => {
  const date = new Date(payload);
  // Extract year, month, and day from the Date object
  const year = date.getFullYear();
  // Month is zero-indexed, so add 1 to get the correct month
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Create the formatted date string in "YYYY-MM-DD" format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
