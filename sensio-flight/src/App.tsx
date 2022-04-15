import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import { Container } from "./styles/layout";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container></Container>
    </div>
  );
}

export default App;
