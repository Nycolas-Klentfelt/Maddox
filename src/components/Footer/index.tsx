import { BoxFooter } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <BoxFooter>
      <div>
        <p>Maddox Estética | Estética, Embelezamento e Cursos em Araucária.</p>
        <p>
          &copy; {currentYear} Maddox Estética. Todos os direitos reservados.
        </p>
      </div>
    </BoxFooter>
  )
}

export default Footer
