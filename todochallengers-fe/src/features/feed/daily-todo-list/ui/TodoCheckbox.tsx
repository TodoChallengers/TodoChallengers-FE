import React from 'react';

interface TodoCheckboxProps {
  done: boolean;
  onClick: () => void;
}

const TodoCheckbox: React.FC<TodoCheckboxProps> = ({ done, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer`}
    >
      <div className="relative w-[23px] h-[23px] flex items-center justify-center">
        <div className={`absolute top-0 left-0 w-3.5 h-3.5 ${done ? 'bg-red' : 'bg-date-btn'} rounded-full`}></div>
        <div className={`absolute top-0 right-0 w-3.5 h-3.5  ${done ? 'bg-red' : 'bg-date-btn'}  rounded-full`}></div>
        <div className={`absolute bottom-0 left-0 w-3.5 h-3.5  ${done ? 'bg-red' : 'bg-date-btn'}  rounded-full`}></div>
        <div className={`absolute bottom-0 right-0 w-3.5 h-3.5  ${done ? 'bg-red' : 'bg-date-btn'}  rounded-full`}></div>
      </div>
      {done && <span className="absolute text-white">✔</span>}
    </div>
  );
};

export default TodoCheckbox;
