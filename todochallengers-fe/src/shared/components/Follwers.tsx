import React from 'react'
import { Follower } from "@/entities/user/follwer";
import DefaultProfile from '@/assets/default-profile.jpeg'
import FollowersBtn from '@/assets/feed-page/followers.svg'

interface FollowersProps {
  followers: Follower[];
}
const Followers: React.FC<FollowersProps> = ({followers}) => {
  return (
    <div className="w-full max-w-screen-md mx-auto flex space-x-4 p-2">
      <div className="flex flex-col items-center text-black text-[8px] font-pretendard font-semibold space-y-[5px]">
          <img src={DefaultProfile} alt="default" className="w-10 h-10 rounded-full object-cover" />
          <span>me</span>
      </div>
      {followers.map(follower => (
        <div key={follower.id} className="flex flex-col items-center text-black text-[8px] font-pretendard font-light space-y-[5px]">
          <img 
            src={follower.profileImage}
            alt={follower.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{follower.name}</span>
        </div>
      ))}
      <div className='w-10 h-10 flex items-center justify-center bg-button-border rounded-full'>
        <img src={FollowersBtn} alt="default" className="w-3 h-3" />
      </div>
    </div>
  );
};

export default Followers;