import React, {
  Component,
} from 'react'
import request from 'superagent'

import Thumb from '../components/Thumb'

export default class RecentProducts extends Component {
  constructor() {
    super()

    this.state = {
      products: null,
    }
  }
  componentWillMount() {
    request
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

  render() {
    if (!this.state.products) {
      // blank state
      return (
        <section className="container">
          <p>No hay productos recientes</p>
        </section>
      )
    }

    return (
      <section className="container">
        <header>
          <h3>Agregados Recientemente</h3>
        </header>

        <div className="row">
          {this.state.products.map(product => (
            <div className="col-xs-6 col-sm-3" key={product.id}>
              <Thumb {...product} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}
