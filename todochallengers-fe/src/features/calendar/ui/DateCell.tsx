import React from 'react';
import { format, isSameDay, isSameMonth } from 'date-fns';
import DateClover from './DateClover';

interface DateCellProps {
  day: Date;
  currentMonth: Date;
  selectedDate: Date | null;
  onClick: (date: Date) => void;
}

const DateCell: React.FC<DateCellProps> = ({ day, currentMonth, selectedDate, onClick }) => {
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isSelected = isSameDay(day, selectedDate == null ? new Date() : selectedDate!);
  const isToday = isSameDay(day, new Date());

  const handleClick = () => {
    onClick(day);
  };

  return (
    <div
      onClick={handleClick}
      className= {`${isCurrentMonth ? 'w-20 h-35 flex flex-col items-center justify-center mx-auto space-y-2 my-2 cursor-pointer' : 'w-20 h-35 flex flex-col opacity-0 pointer-events-none'}`}
    >
      <DateClover/>
      <div>
        <span className={`w-[18px] h-[18px] flex flex-grow items-center justify-center rounded-full font-pretendard font-medium text-[11px]
          ${isSelected ? 'bg-black text-white font-semibold' : isToday ? 'bg-date-btn text-black font-semibold' : 'bg-gray-200'}
        `}>
          {format(day, 'd')}
        </span>
      </div>
      
    </div>
  );
};

export default DateCell;
