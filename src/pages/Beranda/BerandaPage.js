import React from 'react'
import Header from '../../components/Header/Header'
import HeroMain from '../../components/Main/HeroMain'
import ContentSatu from "../../components/Main/ContentSatu"
import ContentDua from '../../components/Main/ContentDua'
import Gallery from '../../components/Main/Gallery'
import Footer from '../../components/Footer/Footer'
const BerandaPage = () => {
  return (
    <div>
        <Header />
        <HeroMain />
        <ContentSatu />
        <ContentDua />
        <Gallery />
        <Footer />
    </div>
  )
}

export default BerandaPage