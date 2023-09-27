import React from 'react'

import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import './App.css'

const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <Footer />
      <Footer />
    </div>
  )
}

export default app