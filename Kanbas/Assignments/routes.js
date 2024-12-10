import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  });
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.getAssignmentsForCourse(courseId);
    res.send(assignments);
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    await dao.removeAssignment(assignmentId);
    res.sendStatus(204);
  });
  app.post("/api/assignments/create", async (req, res) => {
    const assignment = req.body;
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });
  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.getAllAssignments();
    res.send(assignments);
  });
}