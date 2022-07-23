import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, toggleStatus } from "../features/todo";

function TodoList() {
  const dispatch = useDispatch();
  console.log("render TodoList");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(useSelector((state) => state.todo.todos));

  const createTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        description: todo,
        id: todos.length + 1,
        status: false,
      };
      dispatch(create(newTodo));

      setTodo("");
      setTodos([...todos, newTodo]);
    }
  };


  const changeStatus = (todo) => {
    dispatch(toggleStatus(todo))
  }

  return (
    <ul>
      <li className="flex  gap-5 mb-5">
        <input
          type="text"
          className="w-full  bg-transparent border-b border-gray-600 text-gray-300 text-sm"
          placeholder="Add a todo"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createTodo();
            }
          }}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <div className="w-32">
          <button
            className="bg-purple-700 px-10 py-1 rounded-2xl"
            onClick={createTodo}
          >
            Add
          </button>
        </div>
      </li>
      <li>Todo List</li>

      {todos
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between gap-5 border-b border-gray-600 py-2 px-5 hover:bg-gray-700"
            >
              <div className="flex items-center">
                <input
                  id={"desc_" + todo.id}
                  type="checkbox"
                  value={todo.status}
                  onChange={(e) => changeStatus(todo)}
                />
                <label htmlFor={"desc_" + todo.id}>
                  <span></span>
                  {todo.description}
                </label>
              </div>
              <div className="flex items-center">
                <button className="px-2 py-1 bg-red-600 text-xs rounded-2xl hover:bg-red-500 hover:scale-125  ">
                  X
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default TodoList;
