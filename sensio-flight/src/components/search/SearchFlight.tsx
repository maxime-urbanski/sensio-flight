import {useTranslation} from "react-i18next";
import { HeroContainer, Container, Title, SearchContainer} from "../../styles/layout";

const SearchFlight = (): JSX.Element => {

  const {t, i18n } = useTranslation()

  return (
    <>
      <HeroContainer>
        <Container>
          <Title color={"red"} position={"center"}>{t('find')}</Title>
          <SearchContainer>Hello</SearchContainer>
        </Container>
      </HeroContainer>
    </>
  )
}

export default SearchFlight;
