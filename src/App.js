import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Todos} from './components/Todos';
import React, {useState} from 'react'
import { AddTodo } from './components/AddTodo';

function App(){

  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    console.log("I am on delete",todo)
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

const [todos, setTodos] = useState([
    {
    sno:1,
    title: "Take Sam for a Walk",
    desc: "Kardiyo yaad se!"
  },
  {
    sno:2,
    title: "Have breakfast",
    desc: "Marzi h khana h to kha!"
  },
  {
    sno:3,
    title: "Grind DsAlgo",
    desc: "Job leni h to karna padega!"
  }
  ])

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
