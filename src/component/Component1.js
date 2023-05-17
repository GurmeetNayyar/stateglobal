import React ,{ useState }  from 'react';
import Component3 from './Component3';
const GlobalStateContext = React.createContext();
const Component1 = () => {
    const [username, setUsername] = useState('');

  
  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <GlobalStateContext.Provider value={{ username, updateUsername }}>
      <div>
        <h2>Parent Component</h2>
        <p>Username in Parent: {username}</p>
        <ChildComponent />
      </div>
    </GlobalStateContext.Provider>
  );
};
export default Component1;