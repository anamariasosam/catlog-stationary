import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import superagent from 'superagent'

import '../assets-style/components/CategoriesHeader.scss'

export default class CategoriesHeader extends Component {

  constructor() {
    super()

    this.state = {
      loading: true,
      categories: [{ name: 'Todo' }],
    }
  }

  componentDidMount() {
    this.populateCategories()
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="sectionHero hidden-xs">
          <h3 className="sectionHero__headline">Categorías</h3>
        </div>
        <div className="category">
          <ul className="category__list">

            <li className="category__item">
              <Link className="category__link" to="/categorias">Todo</Link>
            </li>

            {this.state.categories.map(category => (
              <li className="category__item" key={category.name}>
                <Link className="category__link" to={`/categorias/${category.name.toLowerCase()}`} >
                  {category.name}
                </Link>
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
