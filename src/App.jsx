import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Basics from './Components/BasicsComp'
import UseStateHook from './Components/UseStateHook'
import PropsParent from './Components/PropsParent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routing from './Components/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My React Page</h1>
      
{/* <Basics></Basics>
<UseStateHook />
<PropsParent /> */}

<BrowserRouter>
<Routes>
  <Route path='/'  element={<Routing />}></Route>
  <Route path='/basics' element={<Basics/>} ></Route>
  <Route path='/usestate' element={<UseStateHook />}></Route>
  <Route path='/props' element={<PropsParent />}></Route>

</Routes>

</BrowserRouter>

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
// types of componnets: class, functional
// class : stateful component
// functional: stateless component; with the help of hooks now fun.comp also stateful
// splitting components: a larger comp or one project we can split into multiple components
// composition of comp: combine splitted components in to one comp is known as composition.

