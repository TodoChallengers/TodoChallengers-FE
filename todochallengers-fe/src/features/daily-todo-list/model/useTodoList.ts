import { useState } from 'react';

interface Todo {
  id: number;
  label: string;
  done: boolean;
  //time?: string;
}

const useTodoList = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState(initialTodos);
  // const [isAddingTodo, setIsAddingTodo] = useState(false);

  const addTodo = (label: string) => {
    const newTodo = {
      id: todos.length + 1,
      label,
      //time: '시간을 설정하세요',
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  // const toggleAddingTodo = () => {
  //   setIsAddingTodo((prev) => !prev);
  // };

  return {
    todos,
    // isAddingTodo,
    addTodo,
    // toggleAddingTodo,
  };
};

export default useTodoList;
