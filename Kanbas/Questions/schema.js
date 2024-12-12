import mongoose from "mongoose";
const questionSchema = mongoose.Schema(
  {
    question: { type: String, required: true },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    type: {
      type: String,
      enum: ["multiple-choice", "true-false", "fill-in-the-blank"],
    },
    points: Number,
    options: [String],
    correctAnswer: String,
  },

  { collection: "questions" }
);
export default questionSchema;