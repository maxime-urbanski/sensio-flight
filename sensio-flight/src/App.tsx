import React, {useState} from 'react';
import './App.css';
import { Container } from "./styles/layout";
import NavBar from "./components/navbar/NavBar";
import SearchFlight from './components/search/SearchFlight'

function App() {

  return (
      <div className="App">
        <NavBar />
        <SearchFlight />
        <Container>
          ok
        </Container>
      </div>
  );
}

export default App;
