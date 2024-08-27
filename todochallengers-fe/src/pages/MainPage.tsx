import React from 'react'
import { Outlet } from 'react-router-dom';
import Layout from '@/shared/components/Layout';

//{children}:{children:React.ReactNode}

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default MainPage;
