import { Container } from './styles'
import { Button } from '../../styles'

const Header = () => {
  return (
    <Container>
      <div className="container">
        <h1>MADDOX ESTÉTICA</h1>
        <Button href="http://wa.me/5541997019462" target="_blank">
          Agende agora
        </Button>
      </div>
    </Container>
  )
}

export default Header
