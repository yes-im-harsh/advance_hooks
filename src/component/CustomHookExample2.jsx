import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString,
    };

    setTasks([...tasks, taskObj]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            value={task}
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="mt-2 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomHookExample2;
