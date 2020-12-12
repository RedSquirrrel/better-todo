import React from "react";
import '../../App.css';


const Todo = ({todos, deleteTodo, toggleText, index}) => {
    return (
         <li>
            <div className = {todos.isComplited ?  'isCompleted': ''} 
            onClick = {() => toggleText(index)}>{todos.name}</div>              
            <button onClick= {() => deleteTodo(index)}>Delete</button>
         </li>
    )
}


export default Todo;
