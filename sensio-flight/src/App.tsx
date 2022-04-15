import React from 'react';
import './App.css';
import { Container } from "./styles/layout";
import NavBar from "./components/navbar/NavBar";
import SearchFlight from './components/search/SearchFlight'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <SearchFlight />
      </Container>
    </div>
  );
}

export default App;
