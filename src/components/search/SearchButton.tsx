import { Button } from '../../styles/layout'
import {useContext, useState} from "react";
import WaitComponent from "./WaitComponent";
import {TripContext} from "../../context/TravelContext";

interface SearchButtonProps {
  info: string
}

const SearchButton = ({ info }: SearchButtonProps): JSX.Element => {
  const [wait, setWait] = useState<boolean>(false)
  const {showResult} = useContext(TripContext)

  const handleClick = () => {
    setWait(!wait)
    setTimeout(() => {
      showResult(true)
      setWait(false)
    }, 3000)
  };
  return (
    <>
      <Button onClick={handleClick}>{info}</Button>
      {wait && <WaitComponent /> }
    </>
  )
}

export default SearchButton;
