import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [task, setTask] = useState([]);

  const addTask = useCallback(() => {
    setTask((prevState) => [...prevState, "Some Task"]);
  }, [setTask]);

  return (
    <div>
      <Button addTask={addTask} />
      {task.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log("Button Rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
