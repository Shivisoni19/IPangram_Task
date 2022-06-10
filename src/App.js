import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Signup';
import Login from './Login';
import CustomNavbar from './components/Navbar';
import AddProject from './AddProject';
import Dashboard from './Dashboard';
import About from './About';
import ProjectList from './ProjectList';
import Signup from './Signup';


function App() { 
  return (
    <div>
      <Router>
        <CustomNavbar/>
      <div className="fluid-container Background-dark-blue main-page">
          <Routes>
            <Route exact path="/" element={<Signup/>} />
            <Route exact path="/projectlist" element={<ProjectList/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="login" element={<Login/>} />
            <Route exact path="addproject" element={<AddProject/>} />
            <Route exact path="dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;