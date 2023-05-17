import React from 'react'
import { useContext } from 'react';
import GlobalStateContext from './GlobalStateContext';

const Component1Child = () => {
    const { username } = useContext(GlobalStateContext);
  return (
    <div>
        <h2>Component1Child</h2>
        <p>Username from Parent: {username}</p></div>
  )
}

export default Component1Child;