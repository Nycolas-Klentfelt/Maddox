import {
  Container,
  CardTeam,
  GridTeam,
  NameTeam,
  PositionTeam,
  TeamBio
} from './styles'

import { SubtitleSections, TitleSections } from '../../styles'

import stefanyImg from '../../assets/images/stee.jpg'

import mariImg from '../../assets/images/marii.jpg'

const SectionTeam = () => (
  <Container>
    <div className="container">
      <TitleSections>Conheça as especialistas por trás da Maddox</TitleSections>
      <SubtitleSections>
        Profissionais dedicadas, apaixonadas por transformar vidas através da
        estética.
      </SubtitleSections>
      <GridTeam>
        <CardTeam>
          <div>
            <img src={stefanyImg} alt="Sté - Especialista em Estética Facial" />
          </div>
          <NameTeam>Sté</NameTeam>
          <PositionTeam>
            Especialista em design de sobrancelha, Esteticista e Cosmetóloga
          </PositionTeam>
          <TeamBio>
            Com mais de 5 anos de experiência, Sté é referência em design de
            sobrancelhas em Araucária. Formada em Estética e Cosmética,
            certificada em inúmeras técnicas da área, ela acredita que tem o
            compromisso de levar a autoestima para suas clientes, seu
            atendimento é baseado em compromisso, qualidade, confiança e amor.
          </TeamBio>
        </CardTeam>
        <CardTeam>
          <div>
            <img src={mariImg} alt="Mari - Especialista em Estética Facial" />
          </div>
          <NameTeam>Mari</NameTeam>
          <PositionTeam>
            Especialista em embelezamento do olhar, Esteticista e Cosmetóloga
          </PositionTeam>
          <TeamBio>
            Com mais de 5 anos de experiência, Mari é referência em
            embelezamento do olhar em Araucária. Formada em Estética e
            Cosmética, certificada em aplicações faciais e corporais. Seu
            proposito é oferecer um atendimento único e criar experiências que
            encantam.
          </TeamBio>
        </CardTeam>
      </GridTeam>
    </div>
  </Container>
)

export default SectionTeam
