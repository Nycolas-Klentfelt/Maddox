import styled from 'styled-components'
import { colors } from '../../styles'

export const FeedbackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`

export const Card = styled.div`
  background-color: ${colors.secondaryColor};
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(118, 131, 113, 0.15);
  }
`

export const Aspas = styled.p`
  font-size: 4.8em;
  color: ${colors.primaryColor};
  line-height: 0.5;
  margin-bottom: 20px;
  font-family: Georgia, serif;
`

export const FeedbackText = styled.p`
  font-size: 1em;
  color: ${colors.textColor};
  line-height: 1.8;
  margin-bottom: 25px;
  font-style: italic;
`

export const FeedbackAuthor = styled.div`
  border-top: 2px solid ${colors.primaryColor};
  padding-top: 15px;
`

export const FeedbackName = styled.p`
  font-size: 1.1em;
  color: ${colors.primaryColor};
  font-weight: 600;
  margin-bottom: 5px;
`

export const FeedbackAdress = styled.p`
  font-size: 0.9em;
  color: ${colors.textColor};
  font-weight: 300;
`
