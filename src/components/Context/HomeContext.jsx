import React, { createContext, useState } from 'react';

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  return (
    <HomeContext.Provider value={{ data, setData }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
