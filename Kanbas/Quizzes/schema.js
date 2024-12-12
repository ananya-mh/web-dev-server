import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    published: { type: Boolean, default: false },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    type: { type: String, default: "GRADED_QUIZ" },
    points: { type: Number, default: 0 },
    assignmentGroup: { type: String, default: "QUIZZES" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    attemptChance: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: false },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: String },
    availableFrom: { type: String },
    availableUntil: { type: String },
    isTemporary: { type: Boolean, default: true }
},
    { collection: "quizzes" });

export default quizSchema;