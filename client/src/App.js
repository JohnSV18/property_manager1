import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Components/Home/home';
import MainNavbar from './Components/Navbar/navbar';


function App() {
  return (
    <div className="App">
      < MainNavbar /> 
      < Home />
    </div>
  );
}

export default App;
