import moment from "moment"

export const convertData = (data) => {
  return {  firstName: data?.firstname,
    lastName: data?.lastname,
    joinDate: moment(data?.joindate).format("YYYY-MM-DD"),
    birthDate: moment(data?.birthdate).format("YYYY-MM-DD"),
    dept: data?.dept,
    title: data?.title,
    salary: data?.salary,
    email: data?.email,
    id: data?.id,}
}