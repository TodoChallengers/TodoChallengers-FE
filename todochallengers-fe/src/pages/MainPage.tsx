import React from 'react'
import { Outlet } from 'react-router-dom';
// import Button from '../shared/components/Button'
// import Layout from '../components/Layout'
// import { useAuthStore } from '../features/auth/store'
import MainTab from '@/shared/components/MainTab';
import Layout from '@/shared/components/Layout';

//{children}:{children:React.ReactNode}

const MainPage: React.FC = () => {
  // const logout = useAuthStore((state) => state.logout)
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  // const navigate = useNavigate()

  return (
    <Layout>
      <Outlet />
      <MainTab />
    </Layout>
  )
}

export default MainPage;
