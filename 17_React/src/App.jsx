import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyAge from "./pages/VerifyAge";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/verify-age" element={<VerifyAge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
