import { useState } from "react";

function AddItem({ updateAdd, tasks }) {
  const [task, setTask] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Create a todo</h1>
      <input
        type="text"
        placeholder="Write Anything"
        className="border border-gray-300 p-2 rounded-md w-64"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <div className="flex gap-3">
        <button
          className="px-4 py-1 text-white border bg-orange-400 rounded-md hover:bg-orange-500"
          onClick={() => {
            tasks(task);
            setTask("");
          }}
        >
          Save
        </button>
        <button
          className="px-4 py-1 border border-gray-400 rounded-md"
          onClick={updateAdd}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddItem;
