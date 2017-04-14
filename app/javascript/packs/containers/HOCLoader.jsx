import React, { Component } from 'react'
import superagent from 'superagent'

const HOCLoader = variant => ComposedComponent => class Loader extends Component {
  constructor() {
    super()

    this.state = {
      items: null,
    }

    this.populateComponent = ::this.populateComponent
  }

  componentDidMount() {
    this.populateComponent()
  }

  render() {
    return <ComposedComponent {...this.props} items={this.state.items}/>
  }

  populateComponent() {
    superagent
      .get(`/api/${variant.api}`)
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body, this.props)
        }

        if (err) return

        this.setState({ items: res.body })
      })
  }
}

export default HOCLoader
