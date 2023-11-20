import EnterPermission from './components/EnterPermission'
import OtherCounter from './components/OtherCounter'

import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to <a href="https://bizzome.github.io">@BIZZOME</a> world!!</h1>
      <div id='challenge-wrap'>
        <div><p>Do you know how to count to five?</p></div>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <p>Try to guess what will be my next calculation result.</p>
      <OtherCounter counter={count}></OtherCounter>
      
      <EnterPermission counter={count}></EnterPermission>
    </>
  )
}

