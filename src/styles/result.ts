import styled  from  'styled-components'

interface FlexColumnProps {
  justifyContent?: string;
}

export const ResultContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  border:3px solid ${({theme}) => theme.secondary};
  border-radius: 8px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
`
export const ItineraryUl = styled.ul`
  list-style-type: none;
  counter-reset: steps;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > li {
    position: relative;
    margin: 0;
    font-size: 14px;

    > span {
      font-weight: 600;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: counter(steps);
      counter-increment: steps;
      border: 2px solid #000;
      border-radius: 50%;
      display: inline-block;
      height: 24px;
      width: 24px;
      text-align: center;
      line-height: 24px;
      background: #fff;
    }
  }
`
export const FlexColumn = styled.div.attrs(({justifyContent}: FlexColumnProps) => ({
  justifyContent: justifyContent || "center"
}))`
  display: flex;
  flex-direction: column;
  justify-content: ${({justifyContent}) => justifyContent};

  > img {
    width: 100%;
  }

  > p {
    padding: 0;
    font-weight: 600;
    margin: 0;
  }
`

export const PriceButton = styled.div`
  padding: 20px 10px;
  background-color: ${({theme}) => theme.secondary};
  color: white;
  width: 50%;
  margin: 0 auto;
  border-radius: 8px;
`
