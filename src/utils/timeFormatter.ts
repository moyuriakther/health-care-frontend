export const timeFormatter = (time: string) => {
  const date = new Date(time);
  // Extract hours and minutes from the Date object
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Create the formatted time string in "HH:mm" format
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};
