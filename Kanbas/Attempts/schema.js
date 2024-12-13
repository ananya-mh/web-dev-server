import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  points: Number,
  attempts: Number,
  questions: { type: Array, default: [] }
},
    { collection: "attempts" });

export default historySchema;