import FeedHeader from "@/shared/components/header/FeedHeader";
import React, {useState} from "react";
import DefaultProfile from '@/assets/default-profile.jpeg'
import Followers from "@/features/feed/follower/Follwers";
import Calendar from "@/features/feed/calendar/ui/Calendar";
import TodoList from "@/features/feed/daily-todo-list/ui/TodoList"
import UserProfile from "@/features/feed/user/UserProfile"
const followers = [
  {
    id:1,
    name: "chaeng",
    profileImage: {DefaultProfile}.DefaultProfile
  },
  {
    id:2,
    name: "예삐",
    profileImage: {DefaultProfile}.DefaultProfile
  },
  {
    id:3,
    name: "수빔면",
    profileImage: {DefaultProfile}.DefaultProfile
  },
  {
    id:4,
    name: "훈동이",
    profileImage: {DefaultProfile}.DefaultProfile
  }
];

const goals = [
    {
      id: 1,
      label: '학교',
      todos: [
        { id: 1, label: '1과목', done: false },
        { id: 2, label: '기능 고민', done: false },
      ],
    },
    {
      id: 2,
      label: '할일',
      todos: [
        { id: 3, label: '안양천 러닝', done: false },
      ],
    },
    {
      id: 3,
      label: '운동',
      todos: [],
    },
    {
      id: 4,
      label: '식단',
      todos: [],
    },
  ];

const FeedPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected date in FeedPage:', date);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <FeedHeader/>
      <Followers followers={followers}/>
      <div className="flex flex-grow p-2 w-full max-w-screen-md mx-auto">
        <div className="w-5/12 min-w-80">
          <UserProfile 
          name="이은화"
          profileImage={{DefaultProfile}.DefaultProfile}
          statusMessage="쉿 🤫"
          />
          <Calendar onDateSelect={handleDateSelect}/>
        </div>
        <div className="ps-12 space-y-6">
          {goals.map(goal => (
            <TodoList 
              key={goal.id} 
              goalLabel={goal.label} 
              prevTodos={goal.todos} 
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default FeedPage;