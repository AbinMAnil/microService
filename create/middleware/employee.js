const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const verifyEmployee = (req, res, next) => {
  const {
    firstName,
    lastName = "",
    email,
    dept,
    title = "",
    joinDate = null,
    birthDate = null,
    salary = null,
  } = req?.body;


  if (
    !firstName ||
    !lastName ||
    !email ||
    !dept ||
    !title ||
    !joinDate ||
    !birthDate ||
    !salary
  ) {
    res.status(500).json({ message: "Please check all fields " });
  }
  else if(!validateEmail(email)){
    res.status(500).json({ message : "Please enter a valid email" });
  } else next();
};

module.exports  = {
  verifyEmployee
}