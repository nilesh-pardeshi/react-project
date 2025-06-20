import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './ToDoList.css';
export default function ToDoList(){
    let[Todos, setTodos]=useState([{task:"sample-task", id: uuidv4(), isdone: false}]);
    let[newTodo, setnewTodo]=useState("");
    
    let newtast=()=>{
            setTodos((prevTodos)=>{
                return [...prevTodos, {task: newTodo, id: uuidv4(), isdone:false}]
            });
            setnewTodo("");
    };
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>Todos.filter((prevTodos)=>prevTodos.id!=id));
        
    };
    let updateTodovalue=(event)=>{
        setnewTodo(event.target.value);
    };
    
    let upperCaseAll=()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            }
        })
        ));
        
    };

    let markasDone=(id)=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                ...todo,
                isdone: true,
            }
            }else {
                return todo;
            }
        })
        ));
    }

    return(
        <div>
         <input placeholder="Add a task" value={newTodo} onChange={updateTodovalue}></input>
         <br />
         <button onClick={newtast}>Add a Task</button>
         <br /><br /><br /><br />
         <hr />
        <h3>To-Do List</h3>
        <ul>
            {
                Todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isdone? {textDecorationLine:"line-through"}:{}}>
                            {todo.task}
                            </span>
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>markasDone(todo.id)}>Mark as Done</button>
                        </li>
                ))
            }
        </ul>
        <button onClick={upperCaseAll}>Upper case all</button>
        </div>
    );
}