import i18n from '../../i18n'
import {NavBarContainer, NavBarTrad} from '../../styles/Navbar'

const NavBar = (): JSX.Element => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  const flags = [
    {
      icon: '/icon/fr.svg',
      langue: 'fr'
    },
    {
      icon: '/icon/en.svg',
      langue: 'en'
    }
  ]


  return (
    <>
      <NavBarContainer>
        <a href="/">Sensio-flight</a>
        <NavBarTrad>
          {
            flags.map(({icon, langue}) => (
              <img src={icon} alt="" key={icon} width={50} onClick={() => changeLanguage(langue)} />
            ))
          }
        </NavBarTrad>
      </NavBarContainer>
    </>
  )
}

export default NavBar;
