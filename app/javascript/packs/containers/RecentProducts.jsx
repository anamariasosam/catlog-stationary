import React, { Component } from 'react'

import Loader from './HOCLoader'
import Thumb from '../components/Thumb'

class RecentProducts extends Component {

  render() {
    if (!this.props.items) {
      // blank state
      return (
        <section className="container">
          <p>No hay productos recientes</p>
        </section>
      )
    }

    const { items: products } = this.props

    return (
      <section className="container">
        <header>
          <h3>Agregados Recientemente</h3>
        </header>

        <div className="row">
          {/* TODO: Make sure the API send only 4 items to remove the slice method */}
          {products
            .slice(0, 4)
            .map(product => <Thumb {...product.attributes} key={product.id} /> )}
        </div>
      </section>
    )
  }
}

export default Loader({
  api: 'products',
})(RecentProducts)
