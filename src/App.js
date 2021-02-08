import React, { useState } from "react";

function App() {
  const [userName, SetUserName] = useState("Adam");
  const [newItemText, SetNewItemText] = useState("");
  const [todoItems, setTodoItems] = useState([
    { action: "buy flowers", done: false },
    { action: "get shoes", done: false },
    { action: "collect ticket", done: true },
    { action: "call joe", done: false },
  ]);

  const changeStateData = () => {
    SetUserName(userName === "Adam" ? "Bob" : "Adam");
  };

  const updateNewTextValue = (event) => {
    SetNewItemText(event.target.value);
  };

  const createNewTodo = () => {
    setTodoItems([...todoItems, { action: newItemText, done: false }]);
  };

  const toggleTodo = (todo) => {
    todoItems.map((item) =>
      item.action === todo.action ? { ...item, done: !item.done } : item
    );
  };

  const todoTableRows = () => {
    return todoItems.map((item, index) => (
      <tr key={index}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(item) => toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {userName} To Do List ({todoItems.filter((t) => !t.done).length} items
        to do)
      </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input
            className="form-control"
            value={newItemText}
            onChange={updateNewTextValue}
          />
          <button className="btn btn-primary mt-1" onClick={createNewTodo}>
            Add
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todoTableRows()}</tbody>
        </table>
      </div>
      <button className="btn btn-primary m-2" onClick={changeStateData}>
        Change
      </button>
    </div>
  );
}

export default App;
