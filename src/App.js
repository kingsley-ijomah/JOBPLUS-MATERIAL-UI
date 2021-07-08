import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
