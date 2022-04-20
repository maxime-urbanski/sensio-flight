import {FlexColumn} from "../../styles/result";
import {useTranslation} from "react-i18next";

interface FlightInformationProps {
  flightNumber: string;
  duration: number;
}

const FlightInformation = ({flightNumber, duration}: FlightInformationProps) => {

  const {t} = useTranslation();

  const minuteToHours = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = ((duration / 60) - hours) * 60
    const roundedMinutes = Math.round(minutes)
    if (roundedMinutes < 10) {
      return `${hours}h 0${roundedMinutes}`
    }
    if (roundedMinutes === 0) {
      return `${hours}h`
    }
    return `${hours}h${roundedMinutes}`
  }

  return (
    <FlexColumn justifyContent={"space-between"}>
      <FlexColumn>
        <p>
          {t('flight_number')}
        </p>
        <span>{flightNumber}</span>
      </FlexColumn>
      <FlexColumn>
        <p>
          {t('duration')}
        </p>
        <span>{minuteToHours(duration)}</span>
      </FlexColumn>
    </FlexColumn>
  )
}

export default FlightInformation
