import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePost from './Screens/SinglePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              {/* <Route path="/singlepost" element={<SinglePost />} /> */}
              <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 

              <Route path="/singlepost" element={<SinglePost title="Hello" />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
