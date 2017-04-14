import React, { Component } from 'react'
import request from 'superagent'

import '../assets-style/containers/RecentStores.scss'

export default class RecentStores extends Component {
  constructor() {
    super()

    this.state = {
      stores: null,
    }
  }

  componentWillMount() {
    request
      .get('/api/stores')
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body, res.body.length)
        }

        if (err) return

        this.setState({ stores: res.body.slice(0, 4) })
      })
  }

  render() {
    if (!this.state.stores) {
      // blank state
      return <p className="container">No Cargaron las tiendas aliadas</p>
    }

    return (
      <section className="container">
        <header>
          <h3>Tiendas Aliadas</h3>
        </header>

        <div className="row">
          {this.state.stores.map((store, i) => (
            <div className="partners__item col-xs-6 col-sm-4 col-md-3" key={i}>
              <a href={`//www.instagram.com/${store.instagram_account}`}>
                <img src={store.instagram_image} role="presentation" />
              </a>
            </div>
          ))}
        </div>
        <br />
      </section>
    )
  }
}
