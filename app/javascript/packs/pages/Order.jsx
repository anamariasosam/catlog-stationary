import React, { Component } from 'react'
import PropTypes from 'prop-types'

class OrderPage extends Component {

  componentWillMount() {
    // TODO Load async product
  }

  render() {
    // TODO create a form to send the order as post to the API
    return (
      <div>
        <span>Orden de compra: </span>
      </div>
    )
  }
}

OrderPage.propTypes = {
  params: PropTypes.shape({
    productID: PropTypes.string,
  }),
}

export default OrderPage
