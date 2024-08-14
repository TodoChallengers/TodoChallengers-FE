import React from 'react'
import MainTab from './MainTab'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="w-full max-w-screen-lg mx-auto flex">
        {children}
      </div>
      <MainTab />
    </div>
  )
}

export default Layout
