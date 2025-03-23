"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const todo = { title: newTodo, completed: false };
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
      setTodos([...todos, res.data]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="New todo..."
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 bg-white mb-2 rounded shadow">
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
