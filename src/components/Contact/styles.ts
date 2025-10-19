import styled from 'styled-components'
import { Button, colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.primaryColor};
  color: ${colors.lightTextColor};
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 1.2em;
    margin-bottom: 40px;
    font-weight: 300;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  ${Button} {
    max-width: 496px;
    background-color: ${colors.darkBg};
    color: ${colors.primaryColor};
    font-size: 1.2em;
    padding: 40px 50px;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 16px;
      padding: 30px 30px;
      max-width: 280px;
    }

    &:hover {
      background-color: #000000;
    }
  }
`
