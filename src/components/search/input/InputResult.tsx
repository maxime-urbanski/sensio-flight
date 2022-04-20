import React, { useContext } from "react";
import {useTranslation} from "react-i18next";
import flightJSON from '../../../flights.json';
import {ResultInputContainer} from "../../../styles/layout";
import { JSON} from "../../../interface/JsonData";
import {TripContext} from '../../../context/TravelContext'

interface InputResultProps {
  value: string;
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

const InputResult = ({value, setShowResult, showResult, inputName}: InputResultProps): JSX.Element => {

  const {t} = useTranslation()

  const { trip, updateTrip} = useContext(TripContext)

  const { included }: JSON = flightJSON;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { dataset, innerText } = event.currentTarget;
    const { airport } = dataset
    setShowResult(!showResult);
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
      return <p><em>{t('not_found')}</em></p>
    }
    return filteredAnswer.map(
      ({index, content}, i) => {
        return <div key={i} onClick={handleClick} data-airport={index}>{content.city}  - {content.name}</div>
      }
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
