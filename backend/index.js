const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const db = {
  todos: [{ id: 1, todoTitle: "learn nodejs", todoDesc: "desc todo" }],
};

app.get("/api/todos/", (req, res) => {
  res.send(db.todos);
  console.log(db.todos);
});

app.post("/api/todos/add", (req, res) => {
  let newTodo = {
    id: db.todos.length+1,
    todoTitle: req.body.todoTitle,
    todoDesc: req.body.todoDesc,
  };

  db.todos.push(newTodo);
  res.send(db.todos);
  console.log(db.todos);
});

app.listen(5500, () => console.log("port 5500"));
