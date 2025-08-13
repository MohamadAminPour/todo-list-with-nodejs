let content = document.querySelector(".content");
let form = document.querySelector("#form");
let todoTitle = document.querySelector("#todoTitle");
let todoDesc = document.querySelector("#todoDesc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = { todoTitle: todoTitle.value, todoDesc: todoDesc.value };
  fetch("http://localhost:5500/api/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((res) => {
      if(res.status===200){
        res.text()
        alert("تودو ثبت شد، یک بار صفحه را رفرش کنید")
        todoTitle.value = todoDesc.value = ""
      }
    })
    .then((data) => {
      console.log(data);
    });
});

fetch("http://localhost:5500/api/todos")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.todos);

    data.map((todo) => {
      content.insertAdjacentHTML(
        "beforeend",
        `
        <p>${todo.id} | ${todo.todoTitle} | ${todo.todoDesc}</p>
        `
      );
    });
  });
