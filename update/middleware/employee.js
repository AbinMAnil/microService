const verifyEmployee = (req, res, next) => {
  console.log(req.body);
  const {
    firstName,
    lastName = "",
    email,
    dept,
    title = "",
    joinDate = null,
    birthDate = null,
    salary = null,
    id
  } = req?.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !dept ||
    !title ||
    !joinDate ||
    !birthDate ||
    !salary ||
    !id
  ) {
    res.status(500).json({ message: "Please check all fields " });
  } else next();
};

module.exports  = {
  verifyEmployee
}