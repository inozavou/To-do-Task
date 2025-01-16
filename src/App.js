import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  function handleSetTask(e) {
    setTask(e.target.value);
  }

  function handleSetTaskArr(task) {
    if (!task.trim()) return;
    setTaskArr((taskArr) => [...taskArr, { task, isChecked: false }]);
    setTask("");
  }

  function handleCheckboxChange(index) {
    setTaskArr((prevTaskArr) =>
      prevTaskArr.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  return (
    <div className="App">
      <Logo />
      <InputForm
        task={task}
        onSetTask={handleSetTask}
        onSetTaskArr={handleSetTaskArr}
      />
      <TodoList taskArr={taskArr} onToggleTask={handleCheckboxChange} />
      <TaskCounter taskArr={taskArr} />
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <h1>
        To-DO... <span className="special-font-span">list</span> 📝
      </h1>
    </div>
  );
}

function InputForm({ task, onSetTask, onSetTaskArr }) {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Type your task here..."
        value={task}
        onChange={onSetTask}
      />
      <button onClick={() => onSetTaskArr(task)}>Add</button>
    </div>
  );
}

function TodoList({ taskArr, onToggleTask }) {
  return (
    <div className="list">
      <ol>
        {taskArr.map((item, index) => (
          <Task
            key={index}
            task={item.task}
            isChecked={item.isChecked}
            onCheckboxChange={() => onToggleTask(index)}
          />
        ))}
      </ol>
    </div>
  );
}

function Task({ task, isChecked, onCheckboxChange }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
      ></input>
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {task}
      </span>
    </li>
  );
}

function TaskCounter({ taskArr }) {
  const completedTasks = taskArr.filter((item) => item.isChecked).length;
  const incompletedTasks = taskArr.length - completedTasks;

  return (
    <div className="counter">
      <span>The number of all your tasks are : {taskArr.length}</span>
      <span> Completed Tasks : {completedTasks} </span>
      <span>Incompleted Tasks :{incompletedTasks} </span>
    </div>
  );
}
