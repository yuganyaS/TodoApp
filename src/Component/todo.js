import React, { useState, useRef } from "react";
import List from "./list";

const Todo = () => {
  const currentTask = useRef("");
  const [taskData, setTaskData] = useState([]);
  const addTask = () => {
    let taskDetail = {
      id: taskData.length + 1,
      task: currentTask.current.value,
    };
    setTaskData([...taskData, taskDetail]);
    currentTask.current.value = "";
    currentTask.current.focus();
  };
  const enterHandler = (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
  }
  return (
    <>
      <div className="todoContainer">
        <input type="text" className="todo-input" ref={currentTask} 
        onKeyDown={enterHandler} placeholder="Enter your task" />
        <button type="button" className="todo-btn" onClick={addTask}>
          Add
        </button>

        <List todoList={taskData} />
      </div>
    </>
  );
};

export default Todo;
