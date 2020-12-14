import React from 'react';

const TodoForm = ({addTodo, newTodo, handleTodoChange}) => {

    return(
        <div>
           <form onSubmit = {addTodo}>
                     <input type='text' 
                            value = {newTodo}
                            onChange = {handleTodoChange}
                            placeholder = 'Add a task'  />
        <button type='sumbit'>Add Task</button>                        

        </form>
        </div>
    )

}

export default TodoForm;