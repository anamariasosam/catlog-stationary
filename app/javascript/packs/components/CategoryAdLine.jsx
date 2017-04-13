import React from 'react'
import './styles/Ads.scss'

const CategoryAdLine = props => (
  <div className="container-fluid ads__top">
    <span>Publicidad | </span>
    <a href="/ads" rel="nofollow noopener noreferrer" target="_blank">
      <span className="img-brand-insert ">
        <span className="title">Relojes En Linea Colombia </span>

        <span className="url">www.relojesenlineacolombia.com - </span>
        <span className="ads__description">
          Casio Swatch Nautica Orient Fossil 100% Originales 2 Años Garantia
        </span>
      </span>
    </a>
    <a
      className="ads__here"
      href="/ads"
      rel="nofollow noopener noreferrer"
      target="_blank"
    > Anuncia aquí </a>
  </div>
)

export default CategoryAdLine
