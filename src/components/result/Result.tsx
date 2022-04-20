import React, {useContext} from "react";
import {TripContext} from "../../context/TravelContext";
import {ResultContainer} from "../../styles/result";
import flightJson from '../../flights.json'
import {JSON} from "../../interface/JsonData";
import Itinerary from "./Itinerary";
import Company from "./Company";
import FlightInformation from "./FlightInformation";
import Price from "./Price";
import {useTranslation} from "react-i18next";

const Result = (): JSX.Element => {

  const {t} = useTranslation();
  const {trip, result} = useContext(TripContext)

  const {arrival, departure} = trip
  const { data }: JSON = flightJson

  const printFlight = data.filter(({departureAirport, arrivalAirport}) => departureAirport === departure.airport && arrivalAirport === arrival.airport);

  const numberOfResult = printFlight.length
  return (
    <>
      {result && <h2>{t('result_count', {count: numberOfResult})}</h2>}
      {result &&
        printFlight.map((flight, index) => {
          return (
            <ResultContainer key={index}>
              <Itinerary
                departure={trip.departure.city}
                arrival={trip.arrival.city}
                takeoff={flight.takeoff}
                landing={flight.landing}
              />
              <Company airline={flight.airline} />
              <FlightInformation
                flightNumber={flight.flightNumber}
                duration={flight.duration}
              />
              <Price
                price={flight.price}
                currency={flight.currencyCode}
              />
            </ResultContainer>
          )
        })

      }
    </>
  )
}

export default Result
