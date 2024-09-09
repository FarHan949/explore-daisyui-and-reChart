import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LineChart from './components/LineChart/LineChart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <LineChart></LineChart>
     
    </>
  )
}

export default App
