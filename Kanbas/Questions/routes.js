import * as dao from "./dao.js";

export default function QuestionsRoutes(app) {

  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const question = await dao.createQuestion(quizId, req.body);
    res.json(question);
  }

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  }

  const updateQuestion = async (req, res) => {
      const status = await dao.updateQuestion(req.params.questionId, req.body);
      res.json(status);
  }

  const findQuestionsByQuizId = async (req, res) => {
      const { quizId } = req.params;
      const questions = await dao.findQuestionsByQuizId(quizId);
      res.json(questions);
  }

  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    if (question) {
        res.json(question);
    } 
  }

  app.get("/api/questions/:questionId", findQuestionById);
  app.get("/api/quizzes/:quizId/questions", findQuestionsByQuizId);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);

}