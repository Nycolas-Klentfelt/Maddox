import { TitleSections, SubtitleSections } from '../../styles'
import * as S from './styles'

const Feedback = () => (
  <div className="container">
    <TitleSections>O Que Nossas Clientes Dizem...</TitleSections>
    <SubtitleSections>
      Histórias reais de transformação e autoestima renovada.
    </SubtitleSections>
    <S.FeedbackGrid>
      <S.Card>
        <S.Aspas>&quot;</S.Aspas>
        <S.FeedbackText>
          Minha experiência com as meninas da Maddox é sempre ótima! Lugar
          aconchegante, atendimento mais que perfeito. Além do trabalho e
          procedimentos muito bem feitos! Já fiz curso também, com uma delas e
          só elogios!
        </S.FeedbackText>
        <S.FeedbackAuthor>
          <S.FeedbackName>Alana E.</S.FeedbackName>
          <S.FeedbackAdress>Araucária, PR</S.FeedbackAdress>
        </S.FeedbackAuthor>
      </S.Card>
      <S.Card>
        <S.Aspas>&quot;</S.Aspas>
        <S.FeedbackText>
          Queria agradecer por vocês terem ajudado a aumentar nossa auto estima,
          só saindo do estúdio já recebemos elogios e adoramos, agora iremos
          fazer só com vocês!
        </S.FeedbackText>
        <S.FeedbackAuthor>
          <S.FeedbackName>Laís A.</S.FeedbackName>
          <S.FeedbackAdress>Araucária, PR</S.FeedbackAdress>
        </S.FeedbackAuthor>
      </S.Card>
      <S.Card>
        <S.Aspas>&quot;</S.Aspas>
        <S.FeedbackText>
          Simplesmente amo essa clinica e não troco por nada! Todos os
          procedimentos que fiz, cílios, drenagem e laser me deram ótimos
          resultados além de todo carinho das nossas atendentes e horários
          flexíveis a cada perfil.
        </S.FeedbackText>
        <S.FeedbackAuthor>
          <S.FeedbackName>Beatriz A.</S.FeedbackName>
          <S.FeedbackAdress>Araucária, PR</S.FeedbackAdress>
        </S.FeedbackAuthor>
      </S.Card>
    </S.FeedbackGrid>
  </div>
)

export default Feedback
