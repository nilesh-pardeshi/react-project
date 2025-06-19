import { useState } from 'react';

export default function LudoBoard(){
    let[moves, setMoves]= useState({blue:0, red:0, yellow:0, green:0});
    let updateBlue=()=>{
        console.log(`moves= ${moves.blue}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue+1};
        });
    }
       let updateRed=()=>{
        console.log(`moves= ${moves.red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red+1};
        });
    }
       let updateyello=()=>{
        console.log(`moves= ${moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow+1};
        });
    }
       let updategreen=()=>{
        console.log(`moves= ${moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green+1};
        });
    }
    return(
        <>
            <p>Play Games</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color:"black"}} onClick={updateyello}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}onClick={updategreen}>+1</button>
                
            </div>
        </>
    );
}