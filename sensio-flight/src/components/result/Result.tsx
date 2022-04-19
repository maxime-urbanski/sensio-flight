import {useContext} from "react";
import {TripContext} from "../../context/TravelContext";
import {ResultContainer} from "../../styles/result";
import flightJson from '../../flights.json'
import {Flight, JSON} from "../../interface/JsonData";

const Result = (): JSX.Element => {

  const {trip, result, showResult} = useContext(TripContext)
  const {arrival, departure, date } = trip
  const { data }: JSON = flightJson

  const printFlight = data.filter(({departureAirport, arrivalAirport}) => departureAirport === departure.airport && arrivalAirport === arrival.airport);


  return (
    <>
      {result &&
        <ResultContainer>
         <h3>Coucou</h3>
        </ResultContainer>
      }
    </>
  )
}

export default Result
