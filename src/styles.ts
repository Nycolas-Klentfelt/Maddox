import styled, { createGlobalStyle } from 'styled-components'
import { Props } from './components/Solutions'

export const colors = {
  primaryColor: '#768371',
  secondaryColor: '#F8F8F8',
  textColor: '#333333',
  lightTextColor: '#FFFFFF',
  accentColor: '#5F6C5D',
  darkBg: '#1A1A1A',
  neutralColor: '#E0E0E0',
  teste: '#0d3316'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
  }

  .container{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 30px 80px 30px;

  @media (max-width: 600px) {
    padding: 50px 20px 80px 20px;
  }
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 12px 25px;
  background-color: ${colors.primaryColor};
  color: ${colors.lightTextColor};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.accentColor};
  }
`

export const TitleSections = styled.h2<Props>`
  font-weight: 600;
  font-size: 2.5em;
  color: ${(props) =>
    props.theme === 'dark' ? colors.lightTextColor : colors.primaryColor};
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

export const SubtitleSections = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  color: ${colors.textColor};
  text-align: center;
  padding-bottom: 60px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding-bottom: 10px;
  }
`
