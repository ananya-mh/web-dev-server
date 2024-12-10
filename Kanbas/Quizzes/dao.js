import Database from "../Database/index.js";

export function findQuizzesByCourseId(courseId) {
    return Database.quizzes.filter((q) => q.course === courseId);
}

export function findQuizzByQuizId(quizId) {
    return Database.quizzes.filter((q) => q._id === quizId);
}

