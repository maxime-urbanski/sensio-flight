import { Wait } from "../../styles/layout";
import {useContext} from "react";
import {TripContext} from "../../context/TravelContext";
import {useTranslation} from "react-i18next";

const WaitComponent = () => {
  const { t } = useTranslation()
  const { trip } = useContext(TripContext);
  const {departure, arrival } = trip


  return (
    <Wait>
      <h2>{t('travel_research_departure')}<span>{departure.city}</span></h2>
      <img src="/img/flight.png" alt=""/>
      <h2>{t('travel_research_arrival')}<span>{arrival.city}</span></h2>
  </Wait>
  )
}

export default WaitComponent
