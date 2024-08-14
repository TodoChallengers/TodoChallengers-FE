import React from 'react';
import TodoCell from './TodoCell';
import logo from '@/assets/todochallengers.png'


interface TodoListProps {
  goalLabel: string;
  todos: { id: number; label: string; done: boolean }[];
  onAddTodo?: () => void;
}

const TodoList: React.FC<TodoListProps> = ({goalLabel, todos, onAddTodo }) => {
  return (
    <div className="mb-4 space-y-4">
      <div className="flex justify-between items-center bg-button-border rounded-full px-1.5 py-1.5 space-x-2">
        <div className="flex-shrink-0">
          <div className='w-6 h-6 rounded-full flex justify-center items-center'>
            <img src={logo} alt="Example" className="w-4 h-4" />
          </div>
        </div>
        <div className="font-pretendard font-medium text-[14px]">
          {goalLabel}
        </div>
        <button
          onClick={onAddTodo}
          className="w-6 h-6 ml-auto rounded-full bg-white hover:text-black transition-colors duration-200"
        >
          +
        </button>
      </div>
      <div className="mb-4 space-y-4">
        {todos.map((todo) => (
          <TodoCell key={todo.id} label={todo.label} done={todo.done} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
