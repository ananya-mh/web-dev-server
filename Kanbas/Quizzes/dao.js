import Database from "../Database/index.js";

export function findQuizzesByCourseId(courseId) {
    return Database.quizzes.filter((q) => q.course === courseId);
}



