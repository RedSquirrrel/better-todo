import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';


const App = () => {
  const [todos, setTodo] = useState(
    [
      {
      id: 1,
      name: 'Reading about async', 
      isComplited: false
     },
      {
      id: 2,
      name: "Do not be lazy", 
      isComplited: false
     },
      {
      id: 3,
      name: 'Make 100 push-ups', 
      isComplited: false
     }
  ]);

  const [newTodo, setNewTodo] = useState('');  

 const addTodo = (event) => {
    event.preventDefault();
 
    const todoObject = {
      id: todos.length + 1,
      name: newTodo,
      isComplited: false,
    }
 
    // check if the input is empty
    if(todoObject.name === ''){
       alert('Add some activites');
    } else {
      setTodo(todos.concat(todoObject));
    }
    setNewTodo(''); // clear input field            
  }
  
  
  const handleTodoChange = (event) => {        
    setNewTodo(event.target.value);      
  }

  const deleteTodo = (index) => {   
  const remove = [...todos]; // make a copy from original array
        remove.splice(index, 1); // delete item 
        setTodo(remove); // update the state    
  }
  
  const toggleText = (index) => {
      const toggle = [...todos];
      toggle[index].isComplited = !toggle[index].isComplited; // switching between true and false
      setTodo(toggle);       
  }


  return (
    <div className='App-header'>
      <h1>Todo App</h1>
      <TodoForm addTodo = {addTodo} handleTodoChange = {handleTodoChange} newTodo = {newTodo}/> 
      
      <ul>
         {todos.map((todo, index) => {
           return(
          <Todo key = {todo.id}
                index = {index}  
                todos ={todo}
                deleteTodo = {deleteTodo}
                toggleText = {toggleText} />
             )
           }
         )}
      </ul>     
    </div>
  )
}

export default App;
