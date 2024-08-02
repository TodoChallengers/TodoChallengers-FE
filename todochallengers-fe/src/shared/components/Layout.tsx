import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <main className="container mx-auto my-8">
        {children}
      </main>
    </div>
  )
}

export default Layout
