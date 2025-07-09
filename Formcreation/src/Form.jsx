import { useState } from "react"

export default function Form(){
    let[fullName, setFullName]= useState("");
    let handleNameChange=(event)=>{
        console.log(event.target.value);
    }
    return(
        <form>
          <input placeholder="Enter your Name" type="text" value={fullName} onChange={handleNameChange}/>
          <button>Submit</button>
        </form>
    )
}