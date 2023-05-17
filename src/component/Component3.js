import React, { useContext, useState } from 'react';
import GlobalStateContext from '../GlobalStateContext';


const Component3 = () => {
    const { username, updateUsername } = useContext(GlobalStateContext);
    const [inputValue, setInputValue] = useState('');
  
 
    const handleSubmit = (e) => {
      e.preventDefault();
      updateUsername(inputValue);
      setInputValue('');
    };
  
    return (
      <div>
        <h2>Non-Nested Component</h2>
        <p>Username: {username}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter username"
          />
          <button type="submit">Update Username</button>
        </form>
      </div>
    );
  };
export default Component3