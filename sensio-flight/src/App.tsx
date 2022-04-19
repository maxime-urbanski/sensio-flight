import React, {useState} from 'react';
import {TripContext} from "./context/TravelContext";
import NavBar from "./components/navbar/NavBar";
import SearchFlight from './components/search/SearchFlight'
import './App.css';
import { Container } from "./styles/layout";

function App() {
  const [trip, setTrip] = useState({
    departure: '',
    arrival:'',
    date:''
  })
  const defaultValue = {
    trip,
    updateTrip: setTrip
  }
  return (
    <TripContext.Provider value={defaultValue}>
      <div className="App">
        <NavBar />
        <SearchFlight />
        <Container>
          ok
        </Container>
      </div>
    </TripContext.Provider>
  );
}

export default App;
