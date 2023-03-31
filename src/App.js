import Form from './Form';
import './App.css';
import Header from './Header';
import React ,{useState} from 'react';
import TodoList from './TodoList';
const App=()=> {
  let [input , setInput]=useState("")
  let [todos, setTodos]=useState([])
  const [edittodo,setEdittodo]=useState(null)
  return (
    <div className="container">
   <div className='app-wrapper'>
   <div>
    <Header/>
   </div>
   <div>
    <Form 
    input={input}
    setInput={setInput}
    todos={todos}
    setTodos={setTodos}
    edittodo={edittodo}
    setEdittodo={setEdittodo}/>
   
   </div>
   <div>
    <TodoList todos={todos} setTodos={setTodos} setEdittodo={setEdittodo}/>
   </div>
   </div>
    </div>
  );
}

export default App;
