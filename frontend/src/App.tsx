import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <Router>
          <Header />
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
        </Router>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
