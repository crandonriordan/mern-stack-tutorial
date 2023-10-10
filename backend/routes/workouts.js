const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkoutById,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/WorkoutController");

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkoutById);

// POST a workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// PATCH (update) a workout
router.patch("/:id", updateWorkout);

module.exports = router;
