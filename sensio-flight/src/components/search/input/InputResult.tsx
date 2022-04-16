import React, {SetStateAction, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import flightJSON from '../../../flights.json';
import {ResultInputContainer} from "../../../styles/layout";
import {TripState} from "../InputSearch";
import { JSON } from "../../../interface/JsonData";


interface InputResultProps {
  value: string;
  setValue: React.Dispatch<SetStateAction<TripState>>;
  showResult: boolean;
  setShowResult:  React.Dispatch<boolean>;
  name: string
}


const InputResult = ({value, setValue, setShowResult, showResult, name}: InputResultProps): JSX.Element => {

  const {t} = useTranslation()

  const { data, included }: JSON = flightJSON;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = event.currentTarget;
    setShowResult(!showResult);
    // updateTrip((prevState): TripState => ({...prevState,
    //   [name]: innerText
    // }))
  }

  /**
   * Autocomplete function for input.
   * Filter the data according to the value of the input according to the name of the city.
   * @return string
   */

  const autocompleteResult = (): JSX.Element | JSX.Element[] => {

    const filteredAnswer =  Object.values(included)
      .filter(
        ({city, name }) => city?.includes(value) || name?.includes(value)
      );
    if (filteredAnswer.length === 0 ) {
      return <p><em>{t('not_found')}</em></p>
    }
    return filteredAnswer.map(
      ({city, name}, index) =>
      <div key={index} onClick={handleClick}>{city}  - {name}</div>
    );
  }

  return (
    <>
      <ResultInputContainer>
        {autocompleteResult()}
      </ResultInputContainer>
    </>
  )
}

export default InputResult;
