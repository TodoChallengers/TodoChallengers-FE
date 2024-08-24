import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// 페이지 컴포넌트 동적 임포트
const HomePage = lazy(() => import('@/pages/auth/HomePage'))
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'))
const JoinPage = lazy(() => import('@/pages/auth/JoinPage'))
const MainPage = lazy(() => import('@/pages/MainPage'))
const FeedPage = lazy(() => import('@/pages/feed/FeedPage'))
const AddGoalPage = lazy(() => import('@/pages/feed/AddGoalPage'))
const ManageGoalPage = lazy(() => import('@/pages/feed/ManageGoalPage'))
const SearchPage = lazy(() => import('@/pages/search/SearchPage'))
const MyPage = lazy(() => import('@/pages/mypage/MyPage'))

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/" element={<MainPage />}>
          <Route path="feed" element={<FeedPage />} />
          <Route path="feed/add-goal" element={<AddGoalPage/>}/>
          <Route path="feed/manage-goal" element={<ManageGoalPage/>}/>
          <Route path="search" element={<SearchPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
