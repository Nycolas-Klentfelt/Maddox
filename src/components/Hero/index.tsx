import { Button } from '../../styles'
import { Background, Banner, Title, Text, ExpClient } from './styles'

const Hero = () => (
  <>
    <Banner>
      <Background>
        <div className="container">
          <Title>
            REDESCUBRA SUA <span>BELEZA NATURAL</span>
          </Title>
          <Text>
            Se você está buscando revitalizar sua aparência e elevar sua
            autoestima, conte com a Maddox nessa jornada de autocuidado e
            transformação
          </Text>
          <Button href="http://wa.me/5541997019462" target="_blank">
            Agende seu horário
          </Button>
        </div>
      </Background>
    </Banner>
    <ExpClient>
      <div className="container">
        <div>
          <h3>Experiência e Qualidade</h3>
          <p>Profissionais especializadas e em constante atualização.</p>
        </div>
        <div>
          <h3>Atendimento Personalizado</h3>
          <p>Cada cliente é única e recebe um tratamento exclusivo.</p>
        </div>
        <div>
          <h3>Tecnologia e Inovação</h3>
          <p>
            Equipamentos modernos e técnicas avançadas para resultados
            incríveis.
          </p>
        </div>
      </div>
    </ExpClient>
  </>
)

export default Hero
