import React, { useState } from "react";
import { InputContainer } from "../../styles/layout";
import InputResult from "./input/InputResult";

interface InputSearchProps {
  label?: string;
  name: string;
}

export interface TripState {
  departure?: string;
  arrival?: string;
}

const InputSearch = ({label, name}: InputSearchProps): JSX.Element => {

  const [value, setValue] = useState<TripState>({
    departure: '',
    arrival: ''
  });

  const [showResult, setShowResult ] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShowResult(true)
    setValue(prevState => ({...prevState,
      [name]: value
    }))
  }

  const bluredInput = () => setShowResult(false);

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <InputContainer>
        <label htmlFor="">{label}</label>
        <input
          type="search"
          value={value[name as keyof TripState]}
          onChange={handleChange}
          name={name}
        />
      </InputContainer>
      {showResult &&
        <InputResult
          value={value[name as keyof TripState]!}
          setValue={setValue}
          showResult={showResult}
          setShowResult={setShowResult}
          name={name}
        />
      }
    </div>
  )
}

export default InputSearch
