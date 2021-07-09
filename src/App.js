import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Todos} from './components/Todos';
import React, {useState, useEffect} from 'react'
import { AddTodo } from './components/AddTodo';

function App(){
  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    console.log("I am on delete",todo)
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo=(title,desc)=>{
    let sno;
    if (todos.length==0){
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno+1
    }
    
    const mytodo={
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(mytodo)
    setTodos([...todos, mytodo]);
  }

const [todos, setTodos] = useState(initTodo)

useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])

  return (
    <div className="App">
      <Header title='WhatToDo'/>
      <AddTodo addTodo={addTodo}/>
      <hr/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
