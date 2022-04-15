import {NavBarContainer, NavBarTrad} from '../../styles/Navbar'

const NavBar = (): JSX.Element => {
  const flags = [
    {
      icon: '/icon/fr.svg',
    },
    {
      icon: '/icon/en.svg'
    }
  ]
  return (
    <>
      <NavBarContainer>
        <a href="/">Sensio-flight</a>
        <NavBarTrad>
          {
            flags.map(({icon}) => (
              <img src={icon} alt="" key={icon} width={50}/>
            ))
          }
        </NavBarTrad>
      </NavBarContainer>
    </>
  )
}

export default NavBar;
