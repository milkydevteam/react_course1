import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Body from './components/Body'
import Logo from "./facebook.png"



function App() {



  return (
    <div className="App">
      <Header/>
      <Body className="loginContainer"/>
    </div>
  );
}

export default App;
