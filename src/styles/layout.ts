import styled, {keyframes} from 'styled-components';

interface LinkProps {
  color?: 'primary' | 'secondary' | 'third' | 'white' | 'red'
  size?: number
}

interface TitleProps extends LinkProps{
  position?: string
  marginTop?: number
}

interface FlexContainerProps {
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'center'
}

export const Container = styled.div<{ fluid?: boolean }>`
  width: ${({ fluid }) => (fluid ? '100%' : '1100px')};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`
export const HeroContainer = styled.div`
  background-image: url("/img/search_bg.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 80px 0;
`
export const Link = styled.a.attrs(({ color, size }: LinkProps) => ({
  color: color || 'primary',
  size: size || 16
}))`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({size}) => `${size}px`};
  text-decoration: none;
`
export const Title = styled.h1.attrs(({ color, size, position, marginTop }: TitleProps) => ({
    color: color || "white",
    size: size || 32,
    position: position || 'center',
    marginTop: marginTop || 0

}))
  `
    color: ${({theme, color}) => theme[color] };
    font-size: ${({size}) => `${size}px`};
    text-align: ${({position}) => position};
    margin-top: ${({marginTop}) => `${marginTop}px`};
    margin-bottom: 50px;
  `

export const SearchContainer = styled.div`
  background-color: rgba(56, 56, 56, 0.7);
  border-radius: 8px;
  padding: 30px 20px;
  color: ${({theme}) => theme.white};
  font-weight: 600;
  width: 100%;
`

export const FlexContainer = styled.div.attrs(({ justifyContent, alignItems}: FlexContainerProps) => ({
  justifyContent: justifyContent || 'center',
  alignItems: alignItems || 'center'
}))`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent };
  align-items: ${({alignItems }) => alignItems };
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  position: relative;
`

export const InputContainer = styled(FlexContainer)`
  flex-direction: column;
  position: relative;
  border: 2px solid ${({ theme }) => theme.third};
  padding: 15px;
  border-radius: 3px;
    
  > label {
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    top: -15px;
    left: 10px;
    padding: 2px;
    z-index: 1;
    
    &:after {
      content: "";
      width: 100%;
      height: 9px;
      background: rgba(56, 56, 56, 0.7);
      position: absolute;
      top: 9px;
      left: -2px;
      z-index: -1;
      padding: 3px;
    }
  }  
  > input {
    height: 35px;
    width: 100%;
    border-radius: 4px;
    padding-left: 15px;
    font-size: 16px;
  }    
`
export const Button = styled.button`
  background-color: ${({theme}) => theme.secondary};
  height: 100%;
  margin-top: 50px;
  padding: 10px 30px;
  border: 10px solid ${({theme}) => theme.secondary};
  border-radius: 4px;
  color: ${({theme}) => theme.third};
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`
export const ResultInputContainer = styled.div`
  margin-top: 18px;
  background-color: ${({theme}) => theme.white};
  position: relative;
  color: ${({theme}) => theme.primary};
  z-index: 5;
  
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: ${({theme}) => theme.white};
    top: -6px;
    left:50%;
    right: 0;
    transform: rotate(45deg);
    border-radius: 3px;
    margin-left: -15px;
  }

  > div {
    cursor: pointer;
    padding: 10px 5px;
    &:hover {
      background-color: ${({theme}) => theme.third};
    }
  }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wait = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  > img {
    width: 100px;
    animation: ${rotate} 2s linear infinite;
  }
  
  > h2 {
    color: ${({theme}) => theme.secondary};
    font-size: 28px;
    
    > span {
      color: ${({theme}) => theme.primary};
    }
  }
`
