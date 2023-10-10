const WorkoutModel = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Get workout by :id
const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no valid id given" });
  }
  try {
    const workout = await WorkoutModel.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "no workout found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await WorkoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// delete a workout by id
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no valid id given" });
  }
  try {
    const workout = await WorkoutModel.findByIdAndDelete({ _id: id });
    if (!workout) {
      return res.status(404).json({ error: "no workout found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// update a workout by id
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no valid id given" });
  }
  const workout = await WorkoutModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "no workout found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkoutById,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
