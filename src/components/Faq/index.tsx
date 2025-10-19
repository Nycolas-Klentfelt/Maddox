import { useState } from 'react'
import { TitleSections } from '../../styles'
import { FaqItem, FaqAnswer, FaqQuestion } from './styles'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className="container">
        <TitleSections>Perguntas frequentes</TitleSections>
        <ul>
          <FaqItem>
            <FaqQuestion
              $isOpen={openIndex === 0}
              onClick={() => toggleAnswer(0)}
            >
              Qual horário de atendimento?
            </FaqQuestion>
            <FaqAnswer $isOpen={openIndex === 0}>
              Atendemos de segunda a sábado, somente com horário agendado, porém
              nossos horários são bem flexíveis.
            </FaqAnswer>
          </FaqItem>

          <FaqItem>
            <FaqQuestion
              $isOpen={openIndex === 1}
              onClick={() => toggleAnswer(1)}
            >
              Quais as formas de pagamento?
            </FaqQuestion>
            <FaqAnswer $isOpen={openIndex === 1}>
              Pix, dinheiro, débito ou crédito.
            </FaqAnswer>
          </FaqItem>
        </ul>
      </div>
    </div>
  )
}

export default Faq
