import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { WhatsNew } from './component/WhatsNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      h1
      <WhatsNew></WhatsNew>
    </div>
  )
}

export default App
