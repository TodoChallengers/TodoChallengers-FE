import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <main className="mx-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout
