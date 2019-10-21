import React, {useState } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import './App.css'

function App() {
  const [item, setItem] = useState([])
  return (

    <div className="App">
      <h1> TODO List </h1>
      <TodoForm item = {item} setter={setItem} />
      <TodoList list = {item}/>
    </div>
  );
}

export default App;