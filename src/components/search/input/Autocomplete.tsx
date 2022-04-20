import React, { useState} from "react";
import InputResult from "./InputResult";
import {AutocompleteBox, SearchInput, Wrapper, InputAuto } from "../../../styles/autocomplete"
import {useTranslation} from "react-i18next";

interface AutocompleteProps {
  inputName: string;
  label: string
}

const Autocomplete = ({inputName, label}: AutocompleteProps) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('');
  const [suggestion, setSuggestion] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuggestion(true)
    setValue(event.target.value)
  }

  return (
    <Wrapper>
      <SearchInput>
        <label htmlFor="">{label}</label>
        <InputAuto
          type="text"
          placeholder={t(inputName)}
          value={value}
          onChange={handleChange}/>
        {suggestion &&
          <AutocompleteBox id={"autocomplete-box"}>
            <InputResult
              value={value}
              setValue={setValue}
              showResult={suggestion}
              setShowResult={setSuggestion}
              inputName={inputName}
            />
          </AutocompleteBox>
        }
      </SearchInput>
    </Wrapper>
  )
}

export default Autocomplete
