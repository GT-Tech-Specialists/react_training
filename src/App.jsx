import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Basics from './Components/BasicsComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My React Page</h1>
      
<Basics></Basics>
<Basics />

    </>
  )
}

export default App

//babel => transpiler; jsx -> js
// dom
// vdom
// what is react
//SPA
// component
// 

