import React from 'react'

// function PropsChild(props) {
function PropsChild({username,mailId}){
    // console.log(props);
    
  return (
    <div>
      <h1>Props Child component</h1>
      {/* <h2>{props.name}</h2>
      <h2>{props.mail}</h2> */}
      <h2>{username}</h2>
      
    </div>
  )
}

export default PropsChild
