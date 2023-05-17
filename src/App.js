// import logo from './logo.svg';
// import './App.css';
// import Login from './component/Login';
// import Signup from './component/Signup';
// import Main from './component/Main';
// import State from './State';

// function App() {
//   return (
//     <>
    
//     <State/>
//    </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

import Component1Child from './Component1Child';
import Component3 from './component/Component3';

const App = () => {
  const [username, setUsername] = useState('');

  
  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <GlobalStateContext.Provider value={{ username, updateUsername }}>
      <h1>Parent Component ie component 1</h1>
      <p>Username in Parent: {username}</p>
      <Component3 />
      <Component1Child username={username} />
    </GlobalStateContext.Provider>
  );
};

export default App;