import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../Actions/action';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = (id, newText) => {
    dispatch(updateTodo(id, newText));
    setEditingId(null);
  };

  const handleEditStart = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleAdd = () => {
    if (editText.trim() !== "") {
      handleUpdate(editingId, editText);
      setEditText("");
    }
  };

  return (
    <div className='todoContainer'>
    <div className="todolist">
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          {editingId === todo.id ? (
            <div>
              <input
                className="editinput"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleAdd}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAdd();
                }}
              />
              <div className="btn">
                <button onClick={handleAdd}>Save</button>
              </div>
            </div>
          ) : (
            <div>
              <span>{todo.text}</span>
              <div className="btn">
                <button onClick={() => handleEditStart(todo.id, todo.text)}>Edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>


  );
}

export default Todos;
