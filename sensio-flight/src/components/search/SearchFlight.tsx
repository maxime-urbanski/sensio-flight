import {useTranslation} from "react-i18next";

const SearchFlight = (): JSX.Element => {

  const {t, i18n } = useTranslation()

  return <h1>{t('welcome')}</h1>
}

export default SearchFlight;
