// components/MyComponent.js
import React, { useContext } from 'react';
import { HomeContext } from '../Context/HomeContext';

const MyComponent = () => {
  // Access the context
  const { data, setData } = useContext(HomeContext);

  // Use the context values and functions
  const handleClick = () => {
    setData('New data!');
  };

  return (
    <div>
      <p>Context data: {data}</p>
      <button onClick={() => setData('bla bla')}>Update Context</button>
    </div>
  );
};

export default MyComponent;