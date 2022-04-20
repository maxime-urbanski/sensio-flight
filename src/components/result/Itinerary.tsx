import {useTranslation} from "react-i18next";
import {ItineraryUl} from "../../styles/result";

interface ItineraryProps {
  departure: string;
  arrival: string;
  takeoff: string;
  landing: string;
}

const Itinerary = ({departure, arrival, takeoff, landing}: ItineraryProps): JSX.Element => {

  const { t }= useTranslation()

  return (
    <ItineraryUl>
      <li>
        <span>{departure}</span> <br/>{takeoff}
      </li>
      <li>
        <span>{arrival}</span> <br/> {landing}
      </li>
    </ItineraryUl>
  )
}

export default Itinerary
