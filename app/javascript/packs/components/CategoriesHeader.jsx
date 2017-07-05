import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../assets-style/components/CategoriesHeader.scss'

export default class CategoriesHeader extends Component {

  constructor() {
    super()

    this.state = {
      loading: true,
    }
  }

  render() {
    const { categories } = this.props

    return (
      <header className="container-fluid">
        <div className="sectionHero hidden-xs">
          <h3 className="sectionHero__headline">Categorías</h3>
        </div>
        <div className="category">
          <ul className="category__list">

            <li className="category__item">
              <NavLink exact className="category__link" to="/categorias">Todo</NavLink>
            </li>

            {categories && categories.map(category => (
              <li className="category__item" key={category.name}>
                <NavLink
                  exact
                  activeClassName="active"
                  className="category__link"
                  to={`/categorias/${category.name.toLowerCase()}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )
  }
}
