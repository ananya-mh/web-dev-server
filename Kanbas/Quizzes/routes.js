import * as dao from "./dao.js";

export default function QuizRoutes(app) {

const findAllQuizzes = async (req, res) => {
  const quizzes = await dao.findAllQuizzes();
  res.json(quizzes);
}

const findQuizzesByCourseId = async (req, res) => {
  const {cid} = req.params;
  const quizzes = await dao.findQuizzesByCourseId(cid)
  res.json(quizzes)
}

const createQuiz = async (req, res) => {
  const { cid } = req.params;
  const quiz = { ...req.body, course: cid }
  const newQuiz = await dao.createQuiz(quiz)
  res.json(newQuiz)

}

const findQuizByQuizId = async (req, res) => {
  const { qid } = req.params;
  const quiz = await dao.findQuizByQuizId(qid);
  res.json(quiz);
}

const updateQuiz = async (req, res) => {
  const { qid } = req.params;
  const status = await dao.updateQuiz(qid, req.body);
  res.send(status);
}
const deleteQuiz = async (req, res) => {
  const status = await dao.deleteQuiz(req.params.qid)
  res.send(status)
}

app.post("/api/courses/:cid/quizzes", createQuiz);
app.get("/api/courses/:cid/quizzes", findQuizzesByCourseId);
app.get("/api/quizzes/:qid", findQuizByQuizId);
app.get("/api/courses/:cid/quizzes/:qid", findQuizByQuizId);
app.get("/api/quizzes", findAllQuizzes);
app.put("/api/quizzes/:qid", updateQuiz);
app.delete("/api/quizzes/:qid", deleteQuiz)

}