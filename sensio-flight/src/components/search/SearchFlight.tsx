import {useTranslation} from "react-i18next";
import InputSearch from "./InputSearch";
import SearchButton from "./SearchButton";
import { HeroContainer, Container, Title, SearchContainer, GridContainer } from "../../styles/layout";

const SearchFlight = (): JSX.Element => {

  const {t} = useTranslation();

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
                inputName={"arrival"}
              />
            </GridContainer>
              <SearchButton info={t('search')}/>
            </SearchContainer>
        </Container>
      </HeroContainer>
    </>
  )
}

export default SearchFlight;
