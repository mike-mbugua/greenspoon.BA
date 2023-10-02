import "./App.css";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/signup/Signup";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Event from "./components/events/Event";
import Schedule from "./components/schedule/Schedule";
import Budget from "./components/budget/Budget";
import Sales from "./components/sales/Sales";
import Suggestions from "./components/complains/Suggestions";
import Colleague from "./components/colleagues/Colleague";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Event />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/colleagues" element={<Colleague />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
