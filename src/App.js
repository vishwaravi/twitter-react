import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Feed from "./components/feed/Feed";
import CreatePost from "./components/feed/CreatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreatePost />} />
        {/* Login Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        {/* login Routes */}

        <Route path="home" element={
          <PrivateRoute>
              <Feed />
          </PrivateRoute>
        } />

      </Routes>
    </div>

  );
}

export default App;
