import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Pressure from './components/sections/Pressure'
import HowItWorks from './components/sections/HowItWorks'
import Mandates from './components/sections/Mandates'
import FlagshipDossiers from './components/sections/FlagshipDossiers'
import AdvisoryPartners from './components/sections/AdvisoryPartners'
import UseCases from './components/sections/UseCases'
import OriginationPilot from './components/sections/OriginationPilot'
import PartnerInquiry from './components/sections/PartnerInquiry'
import DemoPage from './components/demo/DemoPage'

const path = typeof window !== 'undefined' ? window.location.pathname : '/'
const isDemo = path.startsWith('/demo')

export default function App() {
  if (isDemo) return <DemoPage />

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pressure />
        <HowItWorks />
        <Mandates />
        <FlagshipDossiers />
        <AdvisoryPartners />
        <UseCases />
        <OriginationPilot />
        <PartnerInquiry />
      </main>
      <Footer />
    </>
  )
}
