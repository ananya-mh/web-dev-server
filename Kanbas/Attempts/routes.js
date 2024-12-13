import * as dao from "./dao.js"

export default function AttemptsRoutes(app) {
    const updateAttempts = async (req, res) => {
        const { qid } = req.params;
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        let newAttempts = {...JSON.parse(JSON.stringify(req.body)), user: currentUser._id, quiz: qid, points: 0}
        newAttempts.questions.forEach((q, i) => {
            if ('answer' in q) {
                if (q.questionType === 'MULTIPLE_CHOICE') {
                    if (q.multipleChoiceQuestionAnswers[q.answer].correct) {
                        newAttempts.points += q.points
                        newAttempts.questions[i].correct = true
                    }
                } else if (q.questionType === 'TRUE_FALSE') {
                    if (q.answer === q.trueFalseAnswer) {
                        newAttempts.points += q.points
                        newAttempts.questions[i].correct = true
                    }
                } else if (q.questionType === 'FILL_IN') {
                    for (let a of q.fillInBlankAnswers) {
                        if (q.answer === a.text || (a.caseInsensitive && q.answer.toLowerCase() === a.text.toLowerCase())) {
                            newAttempts.points += q.points
                            newAttempts.questions[i].correct = true
                            break
                        }
                    }
                }
            }
            if (!('correct' in newAttempts.questions[i])) {
                newAttempts.questions[i].correct = false
            }
        });
        let currentAttempts = await dao.findHistoriesByQuizId(currentUser._id, qid)
        if (currentAttempts.length > 0) {
            newAttempts.attempts = currentAttempts[0].attempts + 1
            let status = await dao.updateAttempts(currentAttempts[0]._id, newAttempts)
            res.json(status)
        } else {
          newAttempts.attempts = 1
          newAttempts = await dao.createAttempts(newAttempts)
          res.json(newAttempts)
        }
    }
    const findAttemptsByQuizId = async (req, res) => {
        const { qid } = req.params;
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        const quizzes = await dao.findAttemptsByQuizId(currentUser._id, qid);
        res.json(quizzes);
    }

    app.post("/api/attempts/:qid", updateAttempts);
    app.get("/api/attempts/:qid", findAttemptsByQuizId);
}