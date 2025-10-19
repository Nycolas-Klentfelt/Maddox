import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  text-align: center;
`

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f3f3f3;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px ${colors.neutralColor};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`
