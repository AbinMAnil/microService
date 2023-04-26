const express = require("express");
const app = express();
const PORT = 3004;
const cors = require("cors")



app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "PATCH", , "DELETE", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

const deleteEmployee = require("./routes/deleteEmployee");


app.use("/api/v1" , deleteEmployee )

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.send(err);
});


app.listen(PORT, () => {
  console.log("Server running on port 3002");
});
