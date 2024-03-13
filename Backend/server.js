const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.routes");
const cartRouter = require("./routes/cart.routes");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Surapong Keaynin",
      url: "https://github.com/BoatGT-9",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  externalDocs: {
    description:"Download Swagger.json",
    url:"/swagger.json",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

//config .env
dotenv.config();
const app = express();
// const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());

//Databse Connection
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => {
  res.send("<h1>This is a RESTful API for SE Shop</h1>");
});

//Add Router
app.get("/swagger.json", (req,res)=> {
  res.header("Content-Type","application/json");
  res.send(swaggerSpec);
})

app.use("/products", productRouter);
app.use("/carts",cartRouter)

//Run Server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
