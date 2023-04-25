import React from 'react';
import Todo from './Todo';
const TodoList = ({todos, setTodos, filteredTodos}) => {
    //We set up the list and export it onto the main website, default should be empty, else we apply the saved settings.
    return(
        
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
            <Todo 
            setTodos={setTodos} 
            todos={todos} 
            todo={todo}
            text={todo.text} 
            key={todo.id}/>
            ))}

        </ul>
      </div>
    )
}

export default TodoList;