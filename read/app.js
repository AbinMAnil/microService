const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors")
const {ROUTES} = require("./routes");
const morgan = require('morgan')
const {setupProxies} = require("./proxy");


// setupProxies(app, ROUTES);

 app.use(morgan("combined"))
// app.use(
//   cors({
//     // origin : "*",
//     origin: "http://localhost:3000",
//     methods: ["POST", "PUT", "PATCH", , "DELETE", "GET", "OPTIONS", "HEAD"],
//     credentials: true,
//   })
// );

app.use(cors());
app.options('*', cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));


const listEmployee = require("./routes/LIstEmployee");


app.use("/api/v1" , listEmployee )

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.send(err);
});


app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
