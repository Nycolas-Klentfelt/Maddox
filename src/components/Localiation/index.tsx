import { Container, MapWrapper } from './styles'
import { TitleSections } from '../../styles'

const Localization = () => {
  return (
    <Container>
      <div className="container">
        <TitleSections>Onde estamos localizados?</TitleSections>
        <MapWrapper>
          <iframe
            title="Mapa — Maddox Estética"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.2270965717296!2d-49.41123031901687!3d-25.589819556085544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd0322ba7c27e7%3A0x7abba5f497ef2b69!2sMaddox%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1760557226046!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapWrapper>
      </div>
    </Container>
  )
}

export default Localization
