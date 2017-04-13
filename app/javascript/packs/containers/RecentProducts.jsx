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
        if (err) return

        this.setState({
          products: res.body.products,
        })
      })
  }

  render() {
    if (!this.state.products) {
      // blank state
      return <p>No hay productos recientes</p>
    }

    return (
      <section className="container">
        <header>
          <h3>Agregados Recientemente</h3>
        </header>

        <div className="row">
          {/* TODO: Remove index and replace with product id after the real API */}
          {this.state.products.map((product, i) => (
            <div className="col-xs-6 col-sm-3" key={i}>
              <Thumb {...product} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}
