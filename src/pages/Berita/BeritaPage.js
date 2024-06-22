import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BeritaContainer from '../../components/Berita/BeritaContainer'
import BeritaHero from '../../components/Berita/BeritaHero'

const BeritaPage = () => {
  return (
    <div>
        <Header />
        <BeritaHero />
        <BeritaContainer />
        <Footer />
    </div>
  )
}

export default BeritaPage