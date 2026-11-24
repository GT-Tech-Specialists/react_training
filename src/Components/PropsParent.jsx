import React, { useState } from 'react'
import PropsChild from './PropsChild'
import DefaultProps from './DefaultProps'

function PropsParent() {
    // props => Properties : used to send data from parent to child
    const [name, setName] = useState("Keerthi")
    const [mail, setMail] = useState("Keerthi@gmail.com")
  return (
    <div>
      <h1>Parent component</h1>
      <PropsChild  username={name} mailId={mail}/>
     <DefaultProps >
    <h1>Default Props</h1>    
    </DefaultProps> 
<DefaultProps><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quo? Quasi aperiam, dolore ullam iusto possimus error harum ut consectetur officiis cupiditate minus, veritatis dolor culpa quisquam eligendi nam nobis perspiciatis at eos modi sit officia nisi accusamus. 
    Commodi sint labore atque ipsam eum dolore quaerat porro odio officiis dolorem!</p></DefaultProps>
    <DefaultProps>
        <button>click</button>
    </DefaultProps>
    </div>
  )
}

export default PropsParent
