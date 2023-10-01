import "./App.css";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/signup/Signup";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
