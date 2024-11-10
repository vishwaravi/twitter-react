import {Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";


function App() {
  return (
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>

  );
}

export default App;
