import { useState } from "react";
import Todo from "./Todo";

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      {showTodo && <Todo />}
      <button className="btn btn-primary" onClick={(e) => setShowTodo(false)}>
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
