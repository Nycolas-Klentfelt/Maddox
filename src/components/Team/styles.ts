import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.secondaryColor};
`

export const GridTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
  max-width: 900px;
  margin: 30px auto 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const CardTeam = styled.div`
  background-color: ${colors.lightTextColor};
  padding: 0;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: center;

  & > div {
    width: 100%;
    height: 350px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(118, 131, 113, 0.2);
  }
`

export const NameTeam = styled.h3`
  font-size: 1.6em;
  color: ${colors.primaryColor};
  margin: 25px 0 10px;
  padding: 0 25px;
`

export const PositionTeam = styled.p`
  font-size: 0.95em;
  color: ${colors.primaryColor};
  font-weight: 600;
  margin-bottom: 15px;
  padding: 0 25px;
`

export const TeamBio = styled.p`
  font-size: 0.95em;
  color: ${colors.textColor};
  line-height: 1.7;
  padding: 0 25px 30px;
  text-align: justify;
`
