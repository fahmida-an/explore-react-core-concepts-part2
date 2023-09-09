import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team  from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);

  }
  return (
    
    <>
      <h3>React Core Concepts 2 </h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <h3>React Core Concepts</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('Third Clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button> 
     
    </>
  )
}

export default App
