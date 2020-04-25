const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "Title field is required"],
    max: 100,
  },
  author: {
    type: String,
    max: 100,
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  duration: {
    type: Number,
    max: 3,
    required: [true, "Duration field is required"],
  },
  preparationTime: {
    type: Number,
    max: 3,
    required: [true, "Duration field is required"],
  },
  minNumberOfPlayers: {
    type: Number,
    required: [true, "Minimum number field is required"],
  },
  age: {
    type: Number,
    max: 6,
    required: [true, "Age field is required"],
  },
  material: [
    {
      type: String,
    },
  ]
});
module.exports.Game = mongoose.model("game", schema);
