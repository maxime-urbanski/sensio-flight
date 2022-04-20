import React, {useState} from 'react';
import {TripContext} from "./context/TravelContext";
import NavBar from "./components/navbar/NavBar";
import SearchFlight from './components/search/SearchFlight'
import Result from "./components/result/Result";
import './App.css';
import { Container } from "./styles/layout";

function App() {
  const [trip, setTrip] = useState({
    departure: {
      airport: '',
      city: '',
    },
    arrival:{
      airport: '',
      city: '',
    },
    date:''
  })

  const [result, showResult] = useState<boolean>(false)

  const defaultValue = {
    trip,
    updateTrip: setTrip,
    result,
    showResult
  }
  return (
    <TripContext.Provider value={defaultValue}>
      <div className="App">
        <NavBar />
        <SearchFlight />
        <Container>
          <Result />
        </Container>
      </div>
    </TripContext.Provider>
  );
}

export default App;
