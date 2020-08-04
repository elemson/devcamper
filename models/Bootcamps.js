const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  // slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
