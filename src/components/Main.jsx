import React, { useState } from "react";
import CreateTodoField from "./Create-todo-field/CreateTodoField";
import TodoItem from "./item/TodoItem";

const data = [
  {
    title: 'Finish the essay',
    isCompleted: false,
    id: 1,
  },
  {
    title: 'Read book',
    isCompleted: false,
    id: 2,
  },
  {
    title: 'Homework',
    isCompleted: false,
    id: 3,
  },
]

const Main = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy);
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id !== id))
  }

  return (
    <div className="text-white w-4/5 mx-auto ">
      <h1 className="text-2xl font-bold text-center mb-8">Todo list</h1>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
}

export default Main;