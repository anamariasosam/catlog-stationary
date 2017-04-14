import React, {
  Component,
} from 'react'
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
      .get('/api/stores?latest=true')
      .end((err, res) => {
        if (err) return

        this.setState({
          stores: res.body.stores,
        })
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
            <div className="partners__item col-xs-6 col-sm-4 col-md-2" key={i}>
              <a href={store.storeURL}>
                <img src={store.imageURL} role="presentation" />
              </a>
            </div>
          ))}
        </div>
        <br />
      </section>
    )
  }
}
