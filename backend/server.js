const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// starts up express
const app = express();

// middleware to log path and method
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongoose");
    // listen for req
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
