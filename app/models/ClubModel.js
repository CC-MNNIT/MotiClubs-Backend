const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    admins: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false }
);

const Club = mongoose.model("Club", ClubSchema, "Clubs");

module.exports = Club;