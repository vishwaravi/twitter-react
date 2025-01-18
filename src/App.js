import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Feed from "./components/feed/Feed";
import CreatePost from "./components/feed/CreatePost";
import Logout from "./components/login/Logout";
import Comments from "./components/feed/Comments";

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Login Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        
        
        {/* Secured Routes */}
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<PrivateRoute><Feed /></PrivateRoute>} />
        <Route path="create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
        <Route path="/home/:id" element={<PrivateRoute><Comments /></PrivateRoute>} />

      </Routes>
    </div>

  );
}
export default App;
