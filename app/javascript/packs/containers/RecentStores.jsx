import React, { Component } from 'react'

import Loader from './HOCLoader'

import '../assets-style/containers/RecentStores.scss'

class RecentStores extends Component {

  render() {
    if (!this.props.items) {
      // blank state
      return <p className="container">No Cargaron las tiendas aliadas</p>
    }

    const { items: stores } = this.props

    return (
      <section className="container">
        <header>
          <h3>Tiendas Aliadas</h3>
        </header>

        <div className="row">
          {stores.map((store, i) => (
            <div className="partners__item col-xs-6 col-sm-4 col-md-3" key={i}>
              <a href={`//www.instagram.com/${store.instagramAccount}`}>
                <img src={store.instagramImage} role="presentation" />
              </a>
            </div>
          ))}
        </div>
        <br />
      </section>
    )
  }
}

export default Loader({
  api: 'stores',
})(RecentStores)
