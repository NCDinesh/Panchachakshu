

import React, { createContext, useContext, useState, useEffect } from 'react';

const FirstVisitContext = createContext();

export const FirstVisitProvider = ({ children }) => {
  const [hasVisitedHome, setHasVisitedHome] = useState(() => {

    return sessionStorage.getItem('hasVisitedHome') === 'true';
  });
  
  const markHomeVisited = () => {
    setHasVisitedHome(true);
    sessionStorage.setItem('hasVisitedHome', 'true');
  };
  
  return (
    <FirstVisitContext.Provider value={{ hasVisitedHome, markHomeVisited }}>
      {children}
    </FirstVisitContext.Provider>
  );
};

export const useFirstVisit = () => {
  const context = useContext(FirstVisitContext);
  if (!context) {
    throw new Error('useFirstVisit must be used within FirstVisitProvider');
  }
  return context;
};