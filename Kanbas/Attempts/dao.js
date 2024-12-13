import model from "./model.js";

export const createAttempt = (attempt) => {
    delete attempt._id;
    return model.create(attempt);
}

export const findAttemptsByQuizId = (userId, quizId) => model.find({ user: userId, quiz: quizId });
export const updateAttempts = (attemptId, attempt) => model.updateOne({ _id: attemptId }, { $set: attempt });