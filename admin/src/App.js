import "./App.css";
import Courses from "./Courses/Courses";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Training from "./Training/Training";
import Alumni from "./Alumni/Alumni"
import User from "./Users/User"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/training" element={<Training/>}/>
        <Route path="/alumni" element = {<Alumni/>}/>
      </Routes>
    </Router>
  );
}

export default App;
