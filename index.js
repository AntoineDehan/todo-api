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
