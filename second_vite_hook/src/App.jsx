import { useState } from 'react'
import './App.css'

function App() {
 
  let value = 5;

 let [change, setChange] = useState(value)


 const addValue = ()=>{
  setChange (change + 2)
 }
 const removeValue = () => {
  setChange(change - 2)
 }

  return (
    <>
      <h1>click to change value {change}</h1>
      <button onClick={addValue}>click here to add</button>
      <br />
      <br />
      <button onClick={removeValue}>click here to remove</button>
    </>
  )
}

export default App
