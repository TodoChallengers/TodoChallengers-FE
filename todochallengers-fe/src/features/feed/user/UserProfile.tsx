import React from 'react';

interface UserProfileProps {
  profileImage: string;     
  name: string;             
  statusMessage: string;    
  onAddClick?: () => void;  
}

const UserProfile: React.FC<UserProfileProps> = ({ profileImage, name, statusMessage, onAddClick }) => {
  return (
    <div className="flex items-center justify-between py-4 px-2">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col items-start py-2 space-y-1">
          <div className="text-[14px] font-pretendard font-bold">{name}</div>
          <div className="text-password-miss text-[10px] font-pretendard font-normal flex items-center">
            {statusMessage}
          </div>
        </div>
      </div>
      
      <button 
        onClick={onAddClick} 
        className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full border-2 border-dashed border-blue-300"
      >
        <span className="text-blue-500 text-lg">+</span>
      </button>
    </div>
  );
};

export default UserProfile;
