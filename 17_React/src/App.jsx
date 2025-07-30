import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyAge from "./pages/VerifyAge";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOtp from "./pages/VerifyOtp";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/verify-age" element={<VerifyAge />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
