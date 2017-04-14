import React from 'react'
import { Link } from 'react-router'

import '../assets-style/components/CategoriesHeader.scss'

const CATEGORIES = [
  'Accesorios',
  'Agendas',
  'Billeteras',
  'Blusas',
  'Bodies',
  'Bolsos',
  'Vestidos',
  'Zapatos',
]

const CategoriesHeader = props => (
  <header className="container-fluid">
    <div className="sectionHero hidden-xs">
      <h3 className="sectionHero__headline">Categorías</h3>
    </div>
    <div className="category">
      <ul className="category__list">

        <li className="category__item">
          <Link className="category__link" to="/categorias">Todo</Link>
        </li>

        {CATEGORIES.map(category => (
          <li className="category__item" key={category}>
            <Link className="category__link" to={`/categorias/${category.toLowerCase()}`} >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default CategoriesHeader
