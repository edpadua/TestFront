import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aprenda React</h1>
      <input placeholder="Testando" value="JavaScript"/>
      <img alt="Lord Of The Rings" src="https://m.media-amazon.com/images/I/511cVvJbjwL._SX331_BO1,204,203,200_.jpg"/>
      <button className="button_test">Enviar</button>
    </>
  )
}

export default App
