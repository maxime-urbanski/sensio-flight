import styled from "styled-components";

export const Wrapper = styled.div`
  max-width:  100%;
  position: relative;
  border: 2px solid ${({ theme }) => theme.third};
  border-radius: 4px;
`
export const SearchInput = styled.div`
  width: 100%;
  border-radius: 8px;
  position: absolute;
  padding: 15px;
  
  > label {
    position: absolute;
    left: 0;
    top: -30px;
  }
`

export const InputAuto = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  box-shadow: 0 1px 5px rgba(0,0,0,.1);
  font-size: 16px;
`

export const AutocompleteBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  max-height: 250px;
  overflow-y: auto;
  box-shadow: 0 1px 2px 3px rgba(0,0,0,.1);
  
  > div {
    padding: 8px 12px;
    color: black;
    cursor: pointer;
    
    &:hover {
      background:  ${({ theme }) => theme.third};
      
      &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
    
  }
`
