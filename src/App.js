import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
import TodoForm from './component/TodoForm.js';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <TodoForm/>
      
    </div>
  );
}

export default App;
