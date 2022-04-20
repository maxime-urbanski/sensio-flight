import React, { useContext } from "react";
import {useTranslation} from "react-i18next";
import flightJSON from '../../../flights.json';
import { JSON} from "../../../interface/JsonData";
import {TripContext} from '../../../context/TravelContext'

interface InputResultProps {
  value: string;
  setValue: React.Dispatch<string>
  showResult: boolean;
  setShowResult:  React.Dispatch<boolean>;
  inputName: string
}

interface Arr {
  index: string;
  content: {
    city?: string;
    name: string;
  }
}

const InputResult = (
  { value,
    setValue ,
    showResult,
    setShowResult,
    inputName
  }: InputResultProps): JSX.Element => {

  const {t} = useTranslation()

  const { trip, updateTrip} = useContext(TripContext)

  const { included }: JSON = flightJSON;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { dataset, innerText } = event.currentTarget;
    const { airport } = dataset
    setShowResult(!showResult);
    setValue(innerText)
    updateTrip({...trip, [inputName]: {
        airport,
        city: innerText,
      },})
  }

  let arr: Arr[] = [];

  /**
   * transform object included in array
   */

  for (const [key, value] of Object.entries(included)) {
    arr.push({
      index: key,
      content: value
    })
  }

  /**
   * Autocomplete function for input.
   * Filter the data according to the value of the input according to the name of the city.
   * @return JSX.Element[]
   */

  const autocompleteResult = (): JSX.Element | JSX.Element[] => {
    const filteredAnswer = arr
      .filter(
        ({index, content}) => content.city?.toUpperCase().includes(value.toUpperCase()) || content.name?.toUpperCase().includes(value.toUpperCase())
      );
    if (filteredAnswer.length === 0 ) {
      return <div><em>{t('not_found')}</em></div>
    }
    return filteredAnswer.map(
      ({index, content}, i) => {
        return <div  key={i} onClick={handleClick} data-airport={index}>{content.city}  - {content.name}</div>
      }
    );
  }

  return (
    <>
      {autocompleteResult()}
    </>
  )
}

export default InputResult;
