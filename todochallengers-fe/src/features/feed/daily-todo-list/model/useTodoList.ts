import { useState } from 'react';

interface Todo {
  id: number;
  label: string;
  done: boolean;
  //time?: string;
}

const useTodoList = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (label: string) => {
    const newTodo = {
      id: todos.length + 1,
      label,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return {
    todos,
    addTodo,
  };
};

export default useTodoList;
