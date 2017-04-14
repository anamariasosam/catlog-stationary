import React, { Component } from 'react'
import superagent from 'superagent'

import Thumb from '../components/Thumb'

export default class RecentProducts extends Component {
  constructor() {
    super()

    this.state = {
      products: null,
    }

    this.populateProducts = ::this.populateProducts
  }

  componentDidMount() {
    this.populateProducts()
  }

  render() {
    if (!this.state.products) {
      // blank state
      return (
        <section className="container">
          <p>No hay productos recientes</p>
        </section>
      )
    }

    const { products } = this.state

    return (
      <section className="container">
        <header>
          <h3>Agregados Recientemente</h3>
        </header>

        <div className="row">
          {products.map(product => <Thumb {...product} key={product.id} /> )}
        </div>
      </section>
    )
  }

  populateProducts() {
    superagent
      .get('/api/products?latest=true')
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log('api/products', res.body, res.body.length)
        }

        if (err) return

        this.setState({ products: res.body.slice(0, 4) })
      })
  }
}
