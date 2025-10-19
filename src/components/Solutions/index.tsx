import { Container, Card, BoxGrid } from './styles'
import { Button, TitleSections } from '../../styles'

export type Props = {
  theme: 'dark' | 'light'
}

const SectionServices = ({ theme }: Props) => {
  return (
    <Container theme={theme}>
      <div className="container">
        <TitleSections>Conheça Nossos Procedimentos</TitleSections>
        <BoxGrid>
          <Card theme={theme}>
            <h3>Embelezamento do Olhar</h3>
            <p>
              Procedimentos de cílios e sobrancelhas para um olhar marcante e
              expressivo. Realce sua beleza natural com técnicas modernas e
              resultados duradouros.
            </p>
          </Card>
          <Card theme={theme}>
            <h3>Estética Facial</h3>
            <p>
              Limpeza de Pele profunda e tratamentos personalizados para a saúde
              e vitalidade do seu rosto. Promova o rejuvenescimento e a
              luminosidade da sua pele.
            </p>
          </Card>
          <Card theme={theme}>
            <h3>Depilação a Laser</h3>
            <p>
              Livre-se dos pelos de forma definitiva e ganhe liberdade para usar
              o que quiser. Tecnologia de ponta para resultados seguros e
              eficazes.
            </p>
          </Card>
          <Card theme={theme}>
            <h3>Tratamentos Corporais</h3>
            <p>
              Massagens relaxantes e drenagem linfática que promovem o bem-estar
              e redução de inchaços.
            </p>
          </Card>
          <Card theme={theme}>
            <h3>Estética avançada</h3>
            <p>
              Procedimentos injetáveis que promovem hidratação profunda e
              firmeza da pele. Enzimas para gordura localizada e redução de
              medidas.
            </p>
          </Card>
          <Card theme={theme}>
            <h3>Cursos e Formação Profissional</h3>
            <p>
              Aprenda as melhores técnicas de embelezamento do olhar com as
              especialistas da Maddox. Invista na sua carreira com quem entende
              do assunto.
            </p>
          </Card>
        </BoxGrid>
        <Button href="/documents/CatalogoMaddox.pdf" download>
          Baixar catálogo de procedimentos
        </Button>
      </div>
    </Container>
  )
}

export default SectionServices
