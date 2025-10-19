import styled from 'styled-components'

import { Button, colors } from '../../styles'
import { Props } from '.'

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === 'light' ? colors.lightTextColor : colors.darkBg};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ${Button} {
    text-align: center;
    max-width: 500px;
    margin-top: 40px;
    text-transform: uppercase;
  }
`

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.theme === 'light' ? 'space-evenly' : 'space-between'};
  background-color: ${(props) =>
    props.theme === 'light' ? colors.secondaryColor : colors.textColor};
  padding: ${(props) => (props.theme === 'light' ? '40px' : '20px')};
  border-radius: 15px;
  border: 1px solid
    ${(props) =>
      props.theme === 'light' ? colors.neutralColor : colors.primaryColor};
  transition: all 0.3s ease;
  text-align: ${(props) => (props.theme === 'light' ? 'left' : 'center')};

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.theme === 'light' ? 'space-evenly' : 'flex-end'};
    padding: ${(props) => (props.theme === 'light' ? '16px' : '8px')};
  }

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.theme === 'light' ? 'flex-start' : 'center'};
    font-size: 24px;
    color: ${colors.primaryColor};
    margin-bottom: 15px;
    height: 100%;
  }

  p {
    font-size: 1em;
    line-height: 1.7;
    color: ${(props) =>
      props.theme === 'light' ? colors.textColor : colors.lightTextColor};
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
  }
`

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

// grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
