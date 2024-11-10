import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data01Page from './components/CTUSER/Data01Page'
import Producto01Page from './components/Producto/Producto01Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto01Page/>
    </>
  )
}

export default App
