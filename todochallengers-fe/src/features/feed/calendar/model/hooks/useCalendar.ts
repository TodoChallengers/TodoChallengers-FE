import { useState } from 'react';
import { addMonths, format, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { DAYS_OF_WEEK } from '../../utils/calendarConstants';

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);  // 선택된 날짜 상태 추가

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const getFormattedMonth = () => format(currentMonth, 'yyyy년 M월');

  const getDaysOfWeek = () => DAYS_OF_WEEK;

  const getMonthCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows: Array<Array<Date>> = [];
    let days: Array<Date> = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(day);
        day = addDays(day, 1);
      }
      rows.push(days);
      days = [];
    }

    return rows;
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    console.log("Selected Date:", day);
  };

  return {
    currentMonth,
    prevMonth,
    nextMonth,
    getFormattedMonth,
    getDaysOfWeek,
    getMonthCells,
    selectedDate,
    handleDateClick,
  };
};
