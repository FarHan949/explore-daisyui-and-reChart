import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LineChart from './components/LineChart/LineChart'
import SParallax from './components/SimpleParallax/SimpleParallax'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <LineChart></LineChart>
     <SParallax></SParallax>
    </>
  )
}

export default App
