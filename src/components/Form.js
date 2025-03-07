import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions/action';

function Form() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; 
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="todoInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add ToDO</button>
      </form>
    </div>
  );
}

export default Form;
