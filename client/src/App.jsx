import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePost from './Screens/SinglePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              {/* <Route path="/singlepost" element={<SinglePost />} /> */}
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/singlepost" element={<SinglePost title="Hello" />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
