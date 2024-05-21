export const timeFormatter = (time: string) => {
  const date = new Date(time);
  // Extract hours and minutes from the Date object
  let hours = date.getHours();
  const amPm = hours >= 12 ? "pm" : "am";
  const minutes = date.getMinutes().toString().padStart(2, "0");
  hours = hours % 12 || 12;
  // Create the formatted time string in "HH:mm" format
  const formattedTime = `${hours}:${minutes} ${amPm}`;
  return formattedTime;
};
