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
