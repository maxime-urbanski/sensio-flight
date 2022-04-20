import React, {useContext, useState} from "react";
import { InputContainer } from "../../../styles/layout";
import InputResult from "./InputResult";
import {Place, Trip, TripContext} from "../../../context/TravelContext";

interface InputSearchProps {
  label: string;
  inputName: string;
}

export interface TripState {
  departure?: string;
  arrival?: string;
  date?: string;
}


const InputSearch = ({label, inputName}: InputSearchProps): JSX.Element => {

  const { trip, updateTrip} = useContext(TripContext)

  const [showResult, setShowResult ] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShowResult(true)
    updateTrip({...trip, [name]: {
        city: value
      }})
  }

  // @ts-ignore
  const {city} = trip[inputName as keyof Trip]

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <InputContainer>
        <label htmlFor="">{label}</label>
        <input
          type="search"
          value={city}
          onChange={handleChange}
          name={inputName}
        />
      </InputContainer>
      {showResult &&
        <InputResult
          value={city}
          showResult={showResult}
          setShowResult={setShowResult}
          inputName={inputName}
        />
      }
    </div>
  )
}

export default InputSearch
