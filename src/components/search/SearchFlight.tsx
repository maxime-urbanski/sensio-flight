import {useTranslation} from "react-i18next";
import InputSearch, {TripState} from "./input/InputSearch";
import SearchButton from "./SearchButton";
import { HeroContainer, Container, Title, SearchContainer, GridContainer } from "../../styles/layout";
import DatePicker from "./input/DatePicker";
import {useContext} from "react";
import {TripContext} from "../../context/TravelContext";

const SearchFlight = (): JSX.Element => {

  const {t} = useTranslation();

  const { trip } = useContext(TripContext);
  const {arrival, departure} = trip


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
              <InputSearch
                label={t('from')}
                inputName={"departure"}
              />
              <InputSearch
                label={t('to')}
                inputName={"arrival" as keyof TripState}
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
