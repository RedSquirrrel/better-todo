import React from 'react';

const TodoForm = ({addTodo, newTodo, handleTodoChange}) => {

    return(
        <div>
           <form onSubmit = {addTodo}>
                     <input type='text' 
                            value = {newTodo}
                            onChange = {handleTodoChange}
                            placeholder = 'add some todo...'  />
        <button type='sumbit'>Add Todo</button>                        

        </form>
        </div>
    )

}

export default TodoForm;