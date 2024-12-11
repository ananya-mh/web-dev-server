import Database from "../Database/index.js";

export function findQuizzesByCourseId(courseId) {
    return Database.quizzes.filter((q) => q.course === courseId);
}

export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: Date.now().toString() };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}


export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    Object.assign(quiz, quizUpdates);
    return quiz;
}

export function deleteQuiz(quizId) {
    const { quizzes } = Database;
    Database.quizzes = quizzes.filter(q => q._id !== quizId);
}
