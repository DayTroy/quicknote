const useCreateDate = () => {
  const dateObj = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = dateObj.getMonth();
  const monthName = monthNames[month];

  const formattedHours = dateObj.getHours().toString().padStart(2, "0");
  const formattedMinutes = dateObj.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}, ${formattedHours}:${formattedMinutes}`;
  return formattedDate;
};

export default useCreateDate;
