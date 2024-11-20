import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";
import Post from "./components/Post";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="post" element={<Post />} />

        {/* Login Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="posts" element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
          } />

      </Routes>
    </div>

  );
}

export default App;
