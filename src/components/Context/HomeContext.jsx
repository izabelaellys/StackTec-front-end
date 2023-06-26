import React, { createContext, useState } from 'react';

const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [orderBy, setOrderBy] = useState('recentes');
  const [postSearchTerm, setPostSearchTerm] = useState('');

  return (
    <HomeContext.Provider value={{ orderBy, setOrderBy, postSearchTerm, setPostSearchTerm }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
