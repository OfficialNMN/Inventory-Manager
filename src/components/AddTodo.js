import React from "react";

export const AddTodo = () => {
  return (
    <div className='container my-3' >
      <h3>Add a ToDo</h3>
      <form align='left'>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="text" aria-describedby="emailHelp" placeholder="Enter Title"  />
        </div>
        <div class="form-group">
          <label for="desc">Description</label>
          <input type="desc" class="form-control" id="desc" placeholder="Description" />
        </div>
        <button type="submit" class="btn btn-success btn-sm"> Add ToDo</button>
      </form>
    </div>
  );
};
