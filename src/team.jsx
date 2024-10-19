import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)
    const handleAdd4=()=>{
const newTeam=team+1;
setTeam(newTeam)
    }
    const handleRemove=()=>{
        const newRemove=team-1;
        setTeam(newRemove)
    }


    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>

            <h3>Playrs: {team}</h3>
            <button onClick={handleAdd4}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}