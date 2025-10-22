import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../../styles'

import bannerG from '../../assets/images/BannerG.jpg'

export const Banner = styled.div`
  background-image: url(${bannerG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Background = styled.div`
  text-align: center;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
  }

  ${Button} {
    text-transform: uppercase;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(118, 131, 113, 0.3);
    letter-spacing: 1px;
    padding: 30px 40px;
  }

  @media (max-width: 600px) {
    padding-top: 20px;
    height: auto;
  }
`

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${colors.lightTextColor};

  span {
    color: ${colors.primaryColor};
  }

  @media (max-width: 600px) {
    font-size: 34px;
  }
`

export const Text = styled.p`
  font-size: 1.3em;
  margin-bottom: 50px;
  font-weight: 300;
  line-height: 1.8;
  color: ${colors.lightTextColor};

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 80px;
  }
`
export const ExpClient = styled.div`
  background-color: ${colors.primaryColor};
  color: ${colors.lightTextColor};

  h3 {
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    gap: 30px;
    padding: 60px 20px;
    text-align: center;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }

    & > div {
      width: 376px;
      padding: 6px;
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`
