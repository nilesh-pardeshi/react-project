import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter]= useState(15);
//let counter =4;

const addValue= ()=>{
  if(counter<20){
  counter= counter+1;
  setCounter(counter);
  console.log("value added",counter);
  }
  else{
    alert("value can't go above 20");
  }
}
const removeValue=()=>{
  if(counter>0){
  counter=counter-1;
    setCounter(counter);
    console.log("value added",counter);
  }
  else{
    alert("value can't go below 0");
  }
  }
  const resetValue=()=>{
    setCounter(15);
    console.log("value added",counter);
  }

  return (
    <>
     <h1>hellow world</h1>
     <h2>total count is {counter}</h2>
     
     <button onClick={addValue}>add value {counter}</button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <br />
     <button onClick={resetValue}>resetValue {counter}</button>
    </>
  )
}

export default App
