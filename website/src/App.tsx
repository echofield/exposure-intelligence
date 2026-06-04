import React, { useState } from 'react'
import Footer from './components/layout/Footer'
import VerticalGateway from './components/gateway/VerticalGateway'
import VerticalStrip from './components/gateway/VerticalStrip'
import Hero from './components/sections/Hero'
import HeroCGP from './components/sections/HeroCGP'
import Pressure from './components/sections/Pressure'
import HowItWorks from './components/sections/HowItWorks'
import MethodTrust from './components/sections/MethodTrust'
import Mandates from './components/sections/Mandates'
import FlagshipDossiers from './components/sections/FlagshipDossiers'
import AdvisoryPartners from './components/sections/AdvisoryPartners'
import UseCases from './components/sections/UseCases'
import OriginationPilot from './components/sections/OriginationPilot'
import PartnerInquiry from './components/sections/PartnerInquiry'
import DemoPage from './components/demo/DemoPage'
import SamplePage from './components/sample/SamplePage'

const path = typeof window !== 'undefined' ? window.location.pathname : '/'
const isDemo = path.startsWith('/demo')
const isSample = path.startsWith('/sample')

type Vertical = null | 'avocat' | 'cgp'

export default function App() {
  const [vertical, setVertical] = useState<Vertical>(null)

  if (isDemo) return <DemoPage />
  if (isSample) return <SamplePage />

  if (vertical === null) return <VerticalGateway onSelect={setVertical} />

  return (
    <>
      <VerticalStrip active={vertical} onSwitch={setVertical} />
      {vertical === 'avocat' ? (
        <main>
          <Hero />
          <Pressure />
          <HowItWorks />
          <MethodTrust />
          <Mandates />
          <FlagshipDossiers />
          <AdvisoryPartners />
          <UseCases />
          <OriginationPilot />
          <PartnerInquiry />
        </main>
      ) : (
        <main>
          <HeroCGP />
          <HowItWorks />
          <MethodTrust />
          <PartnerInquiry />
        </main>
      )}
      <Footer />
    </>
  )
}
