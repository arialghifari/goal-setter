import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              Dashboard
            </Route>
            <Route path="/login" element={<Login />}>
              Login
            </Route>
            <Route path="/register" element={<Register />}>
              Register
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
