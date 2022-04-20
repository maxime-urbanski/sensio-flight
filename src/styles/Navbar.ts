import styled from 'styled-components';

export const NavBarContainer = styled.div`
  // width: 100vw;
  padding: 50px 15px;
  background-color: ${({theme}) => theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavBarTrad = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;  
  
  > img {
    width: 50px;
    height: 50px;
    padding: 0 10px;
    transition: width .3s ease;
    cursor: pointer;
    
    &:hover {
      width: 60px;
    }
  }
`
