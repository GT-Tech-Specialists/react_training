import React from "react";


function Basics(){
    let a=90
    let b=100
    let name="Pavithra"
    let nums = [90,78,23,45]
    let user = {
        name:"Pavi",
        mail:"pavi@gmail.com"
    }
    let isActive = false

    let students = [{name:"pavi",course:"React"},{name:"Raj",course:"Python"}]
    return(
        <div>
            <h1>Basics of React</h1>
            <p>
                {a}
            </p>
            <p>{name}</p>
            <p>{nums}</p>
            <p>{nums.map(i => (
                <li>{i}</li>

            ) )}</p>
            <p>{user.name}</p>
            <p>{user.mail}</p>
            <div>
                {students.map(i => (
                    <div>
                    <li>{i.name}</li>
                    <li>{i.course}</li>
                    </div>
                ))}

            </div>
            
        </div>
        
    )
}

export default Basics