import React from 'react'
import { useAppStore } from './store'
import MyButton from '../shared/components/Button'

const App: React.FC = () => {
  const { count, increase, decrease } = useAppStore()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      <div className="my-4">
        <button onClick={decrease} className="mr-2 p-2 bg-red-500 text-white">-</button>
        <span className="mx-2">{count}</span>
        <button onClick={increase} className="ml-2 p-2 bg-green-500 text-white">+</button>
      </div>
      <MyButton />
    </div>
  )
}

export default App
