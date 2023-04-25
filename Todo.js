import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        //In the case that we're deleting an item, delete it from the list.
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        //In the case that an item has been completed, find the ID and mark it as a completed item.
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }
    return (
        //Here we're creating the physical buttons for the website to use
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;