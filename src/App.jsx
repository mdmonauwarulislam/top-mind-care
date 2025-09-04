"use client"

import { useState } from "react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Why from "./components/Why.jsx"
import Programs from "./components/Programs.jsx"
import Benefits from "./components/Benefits.jsx"
import Comparison from "./components/Comparison.jsx"
import Pricing from "./components/Pricing.jsx"
import Hub from "./components/Hub.jsx"
import Testimonials from "./components/Testimonials.jsx"
import FAQ from "./components/FAQ.jsx"
import FinalCTA from "./components/FinalCTA.jsx"
import Footer from "./components/Footer.jsx"
import TrialModal from "./components/TrialModal.jsx"

export default function App() {
  const [open, setOpen] = useState(false)
  const openTrial = () => setOpen(true)

  return (
    <div className="min-h-dvh bg-slate-50 text-[--color-ink]">
      <Header onStart={openTrial} />
      <main>
        <Hero onStart={openTrial} />
        <Why />
        <Programs />
        <Benefits />
        <Comparison />
        <Pricing onStart={openTrial} />
        <Hub />
        <Testimonials />
        <FAQ />
        <FinalCTA onStart={openTrial} />
      </main>
      <Footer />
      <TrialModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
