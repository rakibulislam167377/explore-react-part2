import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(0)

    const handleAdd =() =>{
const newCount = count +1;
setCount(newCount)

    }
    const handleAdd2=()=>{
        const newCount=count -1;
        setCount(newCount)
    }
    return (
        <div style={{border:'2px solid yellow'}}>

            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>Reduce</button>
        </div>
    )
}