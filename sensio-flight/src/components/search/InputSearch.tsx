import React, {useContext, useState} from "react";
import { InputContainer } from "../../styles/layout";
import InputResult from "./input/InputResult";
import {TripContext} from "../../context/TravelContext";

interface InputSearchProps {
  label?: string;
  inputName: string;
}

export interface TripState {
  departure?: string;
  arrival?: string;
}

const InputSearch = ({label, inputName}: InputSearchProps): JSX.Element => {

  const { trip, updateTrip} = useContext(TripContext)

  const [showResult, setShowResult ] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShowResult(true)
    updateTrip({...trip, [name]: value})
  }

  const bluredInput = () => setShowResult(false);

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <InputContainer>
        <label htmlFor="">{label}</label>
        <input
          type="search"
          value={trip[inputName as keyof TripState]}
          onChange={handleChange}
          name={inputName}
        />
      </InputContainer>
      {showResult &&
        <InputResult
          value={trip[inputName as keyof TripState]!}
          showResult={showResult}
          setShowResult={setShowResult}
          inputName={inputName}
        />
      }
    </div>
  )
}

export default InputSearch
