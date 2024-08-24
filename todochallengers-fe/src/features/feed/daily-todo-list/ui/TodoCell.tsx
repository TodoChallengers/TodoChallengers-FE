import React, { useState } from 'react';
import TodoCheckbox from './TodoCheckbox';

interface TodoCellProps {
  label: string;
  done: boolean;
}

const TodoCell: React.FC<TodoCellProps> = ({ label, done: initialDone }) => {
  const [done, setDone] = useState(initialDone);

  const handleToggleDone = () => {
    setDone(!done);
  };

  return (
    <div className="relative flex flex-row items-stretch w-full">
      <div className="flex items-center">
        <TodoCheckbox done={done} onClick={handleToggleDone} />
        <div className={`ml-2 font-pretendard font-medium text-[14px]`}>
          {label}
        </div>
      </div> 
      {/* 여기 메뉴 버튼! */}
      <div className="absolute right-3 font-pretendard text-todo-menu text-[16px] font-pretendard font-semibold">···</div>
    </div>
  );
};

export default TodoCell;
