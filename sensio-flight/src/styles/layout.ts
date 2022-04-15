import styled from 'styled-components';


interface LinkProps {
  color?: 'primary' | 'secondary' | 'third' | 'white' | 'red'
  size?: number
}

interface TitleProps extends LinkProps{
  position?: string
  marginTop?: number
}

export const Container = styled.div<{ fluid?: boolean }>`
  width: ${({ fluid }) => (fluid ? '100%' : '1100px')};
  margin-left: auto;
  margin-right: auto;
`
export const HeroContainer = styled.div`
  background-image: url("/img/search_bg.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Link = styled.a.attrs(({ color, size }: LinkProps) => ({
  color: color || 'primary',
  size: size || 16
}))`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({size}) => `${size}px`};
  text-decoration: none;
`
export const Title = styled.h1.attrs(({ color, size, position, marginTop }: TitleProps) => {
  console.log(color);
  return ({
    color: color || "white",
    size: size || 32,
    position: position || 'center',
    marginTop: marginTop || 50
  })
})
  `
    color: ${({theme, color}) => theme[color] };
    font-size: ${({size}) => `${size}px`};
    text-align: ${({position}) => position};
    margin-top: ${({marginTop}) => `${marginTop}px`};
  `

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  opacity: .7;
  border-radius: 8px;
  padding: 20px;
  color: ${({theme}) => theme.white};
  font-weight: 600;
`
