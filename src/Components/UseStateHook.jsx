import React, { useState } from 'react'

function UseStateHook() {
    // useState hook: it is a state management hook.
    // syntax: const [state, setState] = useState(initialValue)
// state => which holds the value
// setState => it is a method to update the state value

const [name, setName] = useState("hello")

const user = [{name:"Pavi",mail:"pavi@gmail.com",isActive:true,marks:70},{name:"Ramya",mail:"pavi@gmail.com",isActive:false,marks:76},{name:"Sree",mail:"pavi@gmail.com",isActive:true,marks:96}]


// setName("Pavithra") 

console.log("rendering..");


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Pavi")}>click</button>
      <h2>Conditional rendering</h2>
      {user.map(i => (
        i.isActive && i.marks>80 &&
        <div>
            
            {i.name}--{i.mail}
            </div>
      ))}


    </div>
  )
}

export default UseStateHook
