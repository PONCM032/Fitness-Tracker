const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Please select a type of workout for your session."
        },
        name:{
            type: String,
            trim: true,
            required: "Please state the name of your workout."
        },
        duration:{
            type: Number,
            required: "Please enter the duration of your workout."
        },
      }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


//         weight: 300,
//         reps: 10,
//         sets: 4

    // distance: 4