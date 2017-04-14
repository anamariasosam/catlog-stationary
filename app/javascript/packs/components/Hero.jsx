import React from 'react'
import '../assets-style/components/Hero.scss'

const Hero = () => (
  <header className="hero" style={{ backgroundImage: 'url(/assets/banner.jpg)' }}>
    <section className="container">
      <p className="hero__deck">Los productos de Instagram en un sólo lugar</p>
      <br />
      <div className="hero__actions">
        <a className="btn btn-default btn-lg btn-transparent" href="/products">Ver Productos</a>
      </div>
    </section>
  </header>
)

export default Hero
