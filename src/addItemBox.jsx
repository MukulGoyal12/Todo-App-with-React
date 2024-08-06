import { useState } from "react";
import AddItem from "./addItem";
import { FaPlus } from "react-icons/fa6";

export default function AddItemBox({ tasks }) {
  const [add, setAdd] = useState(false);

  function handleTodo() {
    setAdd(true);
  }

  function cancelButton() {
    setAdd(false);
  }

  return (
    <div className="my-5">
      {add ? (
        <AddItem updateAdd={cancelButton} tasks={tasks} />
      ) : (
        <button
          className="flex items-center gap-2 px-4 py-1 text-white text-sm border bg-orange-400 rounded-3xl hover:bg-orange-500"
          onClick={handleTodo}
        >
          <FaPlus />
          <h1>Add a todo</h1>
        </button>
      )}
    </div>
  );
}
