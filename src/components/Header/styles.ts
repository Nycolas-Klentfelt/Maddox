import styled from 'styled-components'
import { Button, colors } from '../../styles'

export const Container = styled.nav`
  background-color: ${colors.neutralColor};
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 10px;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }

  h1 {
    color: ${colors.primaryColor};
    font-family: sans-serif;
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: 3px;
  }

  .container {
    ${Button} {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`
