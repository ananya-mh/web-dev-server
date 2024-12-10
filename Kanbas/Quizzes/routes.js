import * as dao from "./dao.js";

export default function QuizRoutes(app) {
app.get("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quizzes = dao.findQuizzesByCourseId(courseId);
    res.send(quizzes);
  });

  app.get("/api/courses/:courseId/quizzes/:qid", (req, res) => {
    const { courseId } = req.params;
    const quizzes = dao.findQuizzesByCourseId(courseId);
    res.send(quizzes);
  });
}