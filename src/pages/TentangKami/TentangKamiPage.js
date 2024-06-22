import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeroPage from '../../components/HeroPage/HeroPage'
import TentangKamiContainer from '../../components/TentangKami/TentangKamiContainer'
import TentangKamiContent from '../../components/TentangKami/TentangKamiContent'

const TentangKamiPage = () => {
  return (
    <div>
        <Header />
        <HeroPage />
        <TentangKamiContainer />
        <TentangKamiContent />
        <Footer />
    </div>
  )
}

export default TentangKamiPage