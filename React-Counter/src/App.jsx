import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const HandleDec = ()=>{
    if(count  == 0)
    {
      setCount(0);
    }
    else
    {
      setCount((count) => count - 1)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{backgroundColor:'blue',color:'white',fontSize:'20px'}}>
          +
        </button>
        <p>{count}</p>
        <button onClick={()=>HandleDec()} style={{backgroundColor:'red',color:'white',fontSize:'20px'}}>
          -
        </button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
