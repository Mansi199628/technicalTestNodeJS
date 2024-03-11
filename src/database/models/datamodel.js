const mongoose = require("mongoose");

var demoSchema = new mongoose.Schema(
  {
    ID: { type: String, default: "", unique: true },
    Title: { type: String, default: "" },
    Description: { type: String, default: "" },
    DueDate: { type: Date, default: null },
    AssignedTo: { type: String, default: "" },
    Category: { type: String, default: "" },
    Status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

var demo = mongoose.model("datamodel", demoSchema);
module.exports = demo;
