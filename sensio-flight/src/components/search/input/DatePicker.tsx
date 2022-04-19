import React, {useContext} from "react";
import {TripContext} from "../../../context/TravelContext";
import {useTranslation} from "react-i18next";
import {InputContainer} from "../../../styles/layout";

const DatePicker = () => {

  const {t} = useTranslation();

  const { trip, updateTrip } = useContext(TripContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateTrip({...trip, [name]: value})
  }

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
    <InputContainer>
      <label>{t('depart')}</label>
      <input
        type="date"
        name="date"
        onChange={handleChange}
      />
    </InputContainer>
    </div>
  )
}
export default DatePicker;

