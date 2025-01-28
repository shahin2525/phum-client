const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const daysOptions = days.map((day) => ({
  value: day,
  label: day,
}));

const genders = ["male", "female", "other"];
export const genderOptions = genders.map((gender) => ({
  value: gender,
  label: gender,
}));

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export const bloodGroupOptions = bloodGroups.map((bGroup) => ({
  value: bGroup,
  label: bGroup,
}));
