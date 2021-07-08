import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container' align='left'>
            <h3 className='my-3'>Todos List</h3>
            {/* to display all TodoItem components*/}
            {props.todos.length===0 ? "All clear Well Done!":
            props.todos.map((todo)=>{
                return (
                <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                <hr/>
                </>
            )})}
        </div>
    )
}

