import { useState } from "react";
import AddItemBox from "./addItemBox";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
import Navbar from "./navbar";
import NoTodo from "./noTodo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  function taskAdd(task) {
    setTodos([...todos, { task: task, checked: false, id: Date.now() }]);
  }

  function toggleCheckbox(todo) {
    // let newtodo={...todo,checked}
    // setTodos(
    //   todos.map((item) =>
    //     item.task == todo.task ? { ...item, checked: !item.checked } : item
    //   )
    // );

    setTodos(todos.filter((item) => item.id != todo.id));
    setCompletedTask([...completedTask, todo]);
  }

  function handleUnsaveButton(todo) {
    setCompletedTask(completedTask.filter((item) => item.id != todo.id));
    setTodos([...todos, todo]);
  }

  return (
    <>
      <Navbar />
      <div className="p-2 max-w-7xl m-auto">
        <h1 className="text-3xl font-bold my-5">Things to get done</h1>
        <div className="">
          <h1 className="text-xl font-semibold mb-3">Things to do</h1>
          {todos.length === 0 ? (
            <NoTodo />
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="px-2 flex align-center gap-2">
                <button onClick={() => toggleCheckbox(todo)}>
                  {todo.checked ? (
                    <IoMdCheckboxOutline />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                </button>
                {todo.task}
              </div>
            ))
          )}
        </div>

        <AddItemBox tasks={taskAdd} />

        <div className="">
          <h1 className="text-xl font-semibold mb-3">Things done</h1>
          {completedTask.length === 0 ? (
            <NoTodo />
          ) : (
            completedTask.map((todo, index) => (
              <div key={todo.task} className="px-2 flex align-center gap-2">
                <button onClick={() => handleUnsaveButton(todo)}>
                  <IoMdCheckboxOutline />
                </button>
                {todo.task}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
