import React from 'react';
import logo from '@/assets/todochallengers.png'
import TodoCell from './TodoCell';
import TodoInput from './TodoInput';
import useTodoList from '@/features/daily-todo-list/model/useTodoList'
import useTodoInput from '@/features/daily-todo-list/model/useTodoInput';

interface TodoListProps {
  goalLabel: string;
  prevTodos: { id: number; label: string; done: boolean }[];
  //onAddTodo?: () => void;
}

const TodoList: React.FC<TodoListProps> = ({goalLabel, prevTodos }) => {
  const {todos, addTodo} = useTodoList(prevTodos);
  const {value, onChange, reset, inputRef, containerRef, isAddingTodo, toggleAddingTodo} = useTodoInput();

  const handleAddClick = () => {
    toggleAddingTodo();
  };

  const handleTodoSubmit = () => {
    if (value.trim()) {
      addTodo(value);
      reset();
      toggleAddingTodo();
    }
  };

  return (
    <div ref={containerRef} className="mb-4 space-y-4">
      <div 
        onClick={handleAddClick}
        className="flex justify-between items-center bg-button-border rounded-full px-1.5 py-1.5 space-x-2"
      >
        <div className="flex-shrink">
          <div className='w-6 h-6 rounded-full flex justify-center items-center'>
            <img src={logo} alt="Example" className="w-4 h-4" />
          </div>
        </div>
        <div className="font-pretendard font-medium text-[14px]">
          {goalLabel}
        </div>
        <button
          className="w-6 h-6 ml-auto rounded-full bg-white hover:text-black transition-colors duration-200"
        >
          +
        </button>
      </div>
      <div className="mb-4 space-y-4">
        {todos.map((todo) => (
          <TodoCell key={todo.id} label={todo.label} done={todo.done} />
        ))}
        {isAddingTodo && (
          <TodoInput 
            value={value}
            onChange={onChange}
            onSubmit={handleTodoSubmit} 
            inputRef={inputRef}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
