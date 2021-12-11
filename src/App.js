import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }

  }

  // setInterval(() => {
  //   document.title = 'Textutils is Amazing Mode';
  // }, 2000);

  // setInterval(() => {
  //   document.title = 'Install Textutils Now';
  // }, 1500);

  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route path="/about" element={<About mode={mode}/> } />

        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />

      </Routes>

      </Router>

    </>
  );
}

export default App;
