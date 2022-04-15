import styled from 'styled-components';

export const Container = styled.div<{ fluid?: boolean }>`
  max-width: ${({ fluid }) => (fluid ? '100%' : '1000px')};
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;
  height: 100vh;
`
