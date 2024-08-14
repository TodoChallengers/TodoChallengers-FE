import React from 'react';
import { useCalendar } from '../model/hooks/useCalendar';
import DateCell from './DateCell';
import { ReactComponent as NextBtn } from '@/assets/feed-page/next.svg'
import { ReactComponent as PrevBtn } from '@/assets/feed-page/prev.svg'


interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const {
    currentMonth,
    prevMonth,
    nextMonth,
    getFormattedMonth,
    getDaysOfWeek,
    getMonthCells,
    selectedDate,
    handleDateClick,
  } = useCalendar();

  const handleClick = (day: Date) => {
    handleDateClick(day);
    onDateSelect(day);  // 클릭된 날짜를 FeedPage에 전달
  };

  return (
    <div>
      {/* Header 렌더링 */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-[14px] font-pretendard font-bold">{getFormattedMonth()}</div>
        <div className="flex space-x-6">
          <button onClick={prevMonth} className="text-lg"><PrevBtn/></button>
          <button onClick={nextMonth} className="text-lg"><NextBtn/></button>
        </div>
      </div>

      {/* Days of the week 렌더링 */}
      <div className="flex justify-between">
        {getDaysOfWeek().map((day, i) => (
          <div key={i} className="w-12 text-center text-[11px] font-pretendard font-medium">{day}</div>
        ))}
      </div>

      {/* Month cells 렌더링 */}
      <div>
        {getMonthCells().map((row, i) => (
          <div key={i} className="flex justify-between">
            {row.map(day => (
              <DateCell
                key={day.toString()}
                day={day}
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onClick={handleClick}  // DateCell 클릭 시 부모 컴포넌트로 클릭된 날짜 전달
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
