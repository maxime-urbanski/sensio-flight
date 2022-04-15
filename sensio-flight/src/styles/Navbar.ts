import styled from 'styled-components';

export const NavBarContainer = styled.div`
  // width: 100vw;
  padding: 20px 15px;
  background-color: #066163;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    color: white;
    font-size: 20px;
    font-weight: 600;
    transition: color .3s ease-in-out;

    &:hover {
      color: #CDBE78;
    }
  }
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
