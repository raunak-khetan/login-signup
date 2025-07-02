const Todo = require("../models/todos");

const postTodos = async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.redirect("/api/todos");
}

const getTodos =  async (req, res) => {
  const todos = await Todo.find();
  res.render('todos', { todos });
}

const putTodos = async (req, res) => {
  const { text } = req.body;
  const updated = await Todo.findByIdAndUpdate(req.params.id, { text }, { new: true });
  res.json(updated);
}

const deleteTodos = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
}

module.exports = { postTodos, getTodos, putTodos, deleteTodos };