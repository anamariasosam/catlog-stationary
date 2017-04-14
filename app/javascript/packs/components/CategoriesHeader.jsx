import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import superagent from 'superagent'

import '../assets-style/components/CategoriesHeader.scss'

export default class CategoriesHeader extends Component {

  constructor() {
    super()

    this.state = {
      loading: true,
      categories: null,
    }

    this.populateCategories = ::this.populateCategories
  }

  componentDidMount() {
    this.populateCategories()
  }

  render() {
    const { categories } = this.state

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

  populateCategories() {
    superagent
      .get('/api/categories')
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body, res.length)
        }

        if (err) return

        this.setState({ categories: res.body })
      })
  }
}
