const express = require("express");
const app = express();
const cors = require("cors")
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require('dotenv').config()
const PORT = process.env?.PORT || 3003


// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["POST", "PUT", "PATCH", , "DELETE", "GET", "OPTIONS", "HEAD"],
//     credentials: true,
//   })
// );


app.use(cors());
app.options("*", cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee management app backend ",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3003",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: false,
    customSiteTitle: "employee management",
  })
);


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

const updateEmployee = require("./routes/updateEmployee");


app.use("/api/v1" , updateEmployee )

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.send(err);
});


app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
