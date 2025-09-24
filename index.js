const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Initialisation tableau pour stocker
let todos = [];

app.get("/", (req, res) => {
  res.send("Bienvenue dans l'API TODO");
});

app.listen(PORT, () => {
  console.log(`Serveur ON http://localhost:${PORT}`);
});

// Routes API

// GET
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST
app.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now(), title, done: false };
  todos.push(newTodo);
  res.status(201).json;
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((todo) => todo.id != id);
  res.json({ message: "Todo delete" });
});

// PATCH (todo terminé)
app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id == id);
  if (!todo) return res.status(404).json({ error: "Tache non trouvée" });
  todo.done = !todo.done;
  res.json(todo);
});
