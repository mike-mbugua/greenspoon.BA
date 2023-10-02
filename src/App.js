import "./App.css";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/signup/Signup";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
