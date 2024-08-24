import React from 'react'

const DateClover: React.FC = () => {
  return (
    <div className="relative w-[23px] h-[23px] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-date-btn rounded-full"></div>
        <div className="absolute top-0 right-0 w-3.5 h-3.5  bg-date-btn rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5  bg-date-btn rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5  bg-date-btn rounded-full"></div>
    </div>
  );
};

export default DateClover;