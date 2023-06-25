import React, { createContext, useState } from 'react';

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [orderBy, setOrderBy] = useState('recentes');

  return (
    <HomeContext.Provider value={{ orderBy, setOrderBy }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
