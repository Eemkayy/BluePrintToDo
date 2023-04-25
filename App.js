import React, { useState, useEffect } from "react";
import './App.css';
// Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import sound from "./imsorry/taco.mp3"
function App() {

  // State
  const [inputText, setInputText] = useState(""); // hooks
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Run once when the app start
   useEffect(() =>{
  let audio = new Audio("/taco.mp3")

  const start = () => {
    
    audio.play()
      }
    //we obtain the local data
     getLocalTodos();
   },[]);
  // Use effect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        //In the case that the button clicked is the "Tick" mark
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        //In the case that the button clicked is the "Untick" mark (task is not complete)
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          //In the default case, we just list set all the filteredTodos in todos
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
    //save all the data so that no inputted/deleted/completed item is not updated status-wise
    saveLocalTodos();
  }, [todos, status]);

    //saves the todo items
    const saveLocalTodos = () => { 
    localStorage.setItem('todos', JSON.stringify(todos));
}


  //Returns the todo items
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      //if obtaining the todos does not exist/is null
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
    }
  }
  return (
    //Returns our program onto the localhost website, called "ToDo List" under classname "App"
    <div className="App">
      <header>
        <h1>ToDo List </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      <button onClick={start}>Play</button>

      />
    </div>
  );
}

export default App;
