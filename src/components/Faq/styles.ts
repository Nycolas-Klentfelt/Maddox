import styled from 'styled-components'
import { colors } from '../../styles'

export const FaqItem = styled.li`
  background-color: ${colors.neutralColor};
  margin-bottom: 16px;
  border-radius: 10px;
  overflow: hidden;
`

export const FaqQuestion = styled.div<{ $isOpen: boolean }>`
  color: ${colors.primaryColor};
  font-size: 20px;
  padding: 24px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &::after {
    content: '${(props) => (props.$isOpen ? '-' : '+')}';
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 38px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  color: ${colors.primaryColor};
  font-weight: bold;
  max-height: ${(props) => (props.$isOpen ? '500px' : '0')};
  padding: ${(props) => (props.$isOpen ? '16px 24px' : '0 24px')};
  overflow: hidden;
  transition: all 0.2s ease;
`
