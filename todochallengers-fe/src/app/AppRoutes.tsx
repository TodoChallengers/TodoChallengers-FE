import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// 페이지 컴포넌트 동적 임포트
const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const JoinPage = lazy(() => import('@/pages/JoinPage'))

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
