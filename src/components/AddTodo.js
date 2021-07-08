import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be empty")
        }
        props.addTodo(title,desc);
    }
    return (
        <div className='container my-3' align='left' >
        <h3>Add a ToDo</h3>
        <form align='left' onSubmit={submit}>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="text" value={title} onChange={(e)=>{settitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Title"  />
            </div>
            <div className="form-group">
            <label htmlFor="desc">Description</label>
            <input type="desc" className="form-control" id="desc" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Description" />
            </div>
            <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
        </form>
        </div>
  );
};
