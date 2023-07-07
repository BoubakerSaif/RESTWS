const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../Controllers/TodosControllers");

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.put("/todos", updateTodo);
router.delete("/todos", deleteTodo);

module.exports = router;
