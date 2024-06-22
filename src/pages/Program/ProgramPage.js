import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProgramContent from '../../components/Program/ProgramContent'
import ProgramHero from '../../components/Program/ProgramHero'

const ProgramPage = () => {
  return (
    <div>
        <Header />
        <ProgramHero /> 
        <ProgramContent />
        <Footer />
    </div>
  )
}

export default ProgramPage