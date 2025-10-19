import { TitleSections } from '../../styles'
import { BoxGrid, Card, Container } from '../Solutions/styles'
import { Props } from '../Solutions'

import imgTeste from '../../assets/images/4.jpg'
import imgTeste2 from '../../assets/images/7.jpg'
import imgTeste3 from '../../assets/images/1.jpg'
import imgTeste4 from '../../assets/images/6.jpg'
import imgTeste5 from '../../assets/images/9.jpg'

const Differences = ({ theme }: Props) => {
  return (
    <Container theme={theme}>
      <div className="container">
        <TitleSections theme="dark">
          Por que escolher a Maddox Estética?
        </TitleSections>
        <BoxGrid>
          <Card>
            <h3>Resultados que Encantam</h3>
            <img src={imgTeste} alt="" />
          </Card>
          <Card>
            <h3>Procedimentos Modernos</h3>
            <img src={imgTeste2} alt="" />
          </Card>
          <Card>
            <h3>Ambiente calmo e Confortável</h3>
            <img src={imgTeste3} alt="" />
          </Card>
          <Card>
            <h3>Atendimento Premium e Exclusivo</h3>
            <img src={imgTeste4} alt="" />
          </Card>
          <Card>
            <h3>Diferencial Quântico</h3>
            <img src={imgTeste5} alt="" />
          </Card>
        </BoxGrid>
      </div>
    </Container>
  )
}

export default Differences
