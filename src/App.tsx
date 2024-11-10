import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data01Page from './components/Data01Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data01Page/>
    </>
  )
}

export default App
