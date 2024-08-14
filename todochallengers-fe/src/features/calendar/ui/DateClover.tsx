import React from 'react'

const DateClover: React.FC = () => {
  return (
    <div className="relative w-[26px] h-[26px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-4 h-4 bg-date-btn rounded-full"></div>
        <div className="absolute top-0 right-0 w-4 h-4  bg-date-btn rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4  bg-date-btn rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4  bg-date-btn rounded-full"></div>
    </div>
  );
};

export default DateClover;