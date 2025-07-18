
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
  explanation: { type: String }
});

module.exports = mongoose.model("Quiz", QuizSchema);