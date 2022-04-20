import {useTranslation} from "react-i18next";
import InputSearch, {TripState} from "./input/InputSearch";
import SearchButton from "./SearchButton";
import { HeroContainer, Container, Title, SearchContainer, GridContainer } from "../../styles/layout";
import DatePicker from "./input/DatePicker";
import {useContext} from "react";
import {TripContext} from "../../context/TravelContext";
import Autocomplete from "./input/Autocomplete";

const SearchFlight = (): JSX.Element => {

  const {t} = useTranslation();

  const { trip } = useContext(TripContext);
  return (
    <>
      <HeroContainer>
        <Container>
          <SearchContainer>
            <Title
              color={"third"}
              position={"center"}>
              {t('find')}
            </Title>
            <GridContainer>
              <Autocomplete
                inputName={"departure"}
                label={t('from')}
              />
              <Autocomplete
                inputName={"arrival"}
                label={t('to')}
              />
              <DatePicker />
            </GridContainer>
              <SearchButton info={t('search')}/>
            </SearchContainer>
        </Container>
      </HeroContainer>
    </>
  )
}

export default SearchFlight;
