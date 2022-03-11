import React from "react";
import cn from 'classnames';
import Check from "./Check";
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({item, changeTodo, removeTodo}) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
    >
      <button className="flex items-center" onClick={() => changeTodo(item.id)}>
        <Check isCompleted={item.isCompleted} />
        <span className={cn({ "line-through": item.isCompleted })}>
          {item.title}
        </span>
      </button>
      <button onClick={() => removeTodo(item.id)}>
      <BsTrash
        size={22}
        className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
      />
      </button>
    </div>
  );
}

export default TodoItem;