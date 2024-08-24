import React from 'react';
import TodoCheckbox from './TodoCheckbox';

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onSubmit, inputRef }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="flex items-start mb-2">
      <TodoCheckbox done={false} onClick={()=>{}} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="ml-2 text-sm text-gray-700 pb-3 border-b border-b-red focus:outline-none w-full"
        placeholder="할 일 입력"
        ref={inputRef}
      />
    </div>
  );
};

export default TodoInput;