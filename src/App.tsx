import { GlobalCss } from './styles'

import Header from './components/Header'
import Hero from './components/Hero'
import SectionServices from './components/Solutions'
import SectionTeam from './components/Team'
import Feedback from './components/Feedback'
import Differences from './components/Differences'
import Contact from './components/Contact'
import Localization from './components/Localiation'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Hero />
      <SectionServices theme="light" />
      <SectionTeam />
      <Feedback />
      <Differences theme="dark" />
      <Localization />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
