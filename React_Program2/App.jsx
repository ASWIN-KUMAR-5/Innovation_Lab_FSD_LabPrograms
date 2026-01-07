import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const addTask = () => {
    if (text === "") return;
    setTasks([...tasks, { name: text, completed: false }]);
    setText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={text}
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={tasks.completed} />
            <span className={task.completed ? "done" : ""}>{task.name}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
