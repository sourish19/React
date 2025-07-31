import { createContext } from 'react';
import { useState } from 'react';

const urlContext = createContext('');

const UrlContextProvider = ({ children }) => {
  const [qrData, setQrData] = useState('');

  return (
    <urlContext.Provider value={{ qrData, setQrData }}>
      {children}
    </urlContext.Provider>
  );
};

export { UrlContextProvider, urlContext };
