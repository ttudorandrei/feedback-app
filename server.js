const express = require("express");

const routes = require("./routes");

// Helper method for generating unique ids
const uuid = require("./helpers/uuid");

const PORT = 3002;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

// GET Route for retrieving all the tips

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
