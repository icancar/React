import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    //forward enteredTask to up-component
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleAddTask}
        className="bg-stone-700 hover:text-stone-400"
      >
        Add Task
      </button>
    </div>
  );
}
