require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const mealRoutes = require("./routes/meals");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/meals", mealRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
