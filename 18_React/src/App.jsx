import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GenerateQR from './pages/GenerateQR.jsx';
import ShowQRCode from './pages/ShowQRCode.jsx';
import { UrlContextProvider } from './context/urlContext.jsx';

const App = () => {
  return (
    <>
      <UrlContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/generateqrcode" element={<GenerateQR />} />
            <Route path="/getqrcode" element={<ShowQRCode />} />
          </Routes>
        </BrowserRouter>
      </UrlContextProvider>
    </>
  );
};

export default App;
