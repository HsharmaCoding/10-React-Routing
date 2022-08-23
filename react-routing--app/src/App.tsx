import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Department,Employee,Home,AccessDefaultParameter,Student} from './component';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <div>
        <nav>
          <Link to="/">Home</Link> <br/>
          <Link to="/department">Department</Link> <br/>
          <Link to="/employee">Employee</Link> <br/>
          <Link to="/student">Student</Link> <br/>
          <Link to="/access-default-parameter/2">Access Default Parameter</Link> <br/>
        </nav>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/department" element={<Department/>} />
          <Route  path="/employee" element={<Employee/>} />
          <Route  path="/student/" element={<Student/>} />
          <Route  path="/access-default-parameter/:appid" element={<AccessDefaultParameter/>} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
