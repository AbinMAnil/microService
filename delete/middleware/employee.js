const verifyEmployee = (req, res, next) => {
  const { id } = req?.params;

  if (!id) {
    res.status(500).json({ message: "Id is not specified" });
  } else next();
};

module.exports = {
  verifyEmployee,
};
