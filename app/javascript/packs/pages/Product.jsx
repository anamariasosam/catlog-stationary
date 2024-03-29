import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import request from 'superagent'

import {
  PRODUCT_PATH,
  ORDERS_PATH,
} from '../constants/routes'

const ProductHeader = ({
  storeURL,
  storeName,
}) => (
  <header className="sectionHero hidden-xs">
    <div className="container">
      <h3 className="sectionHero__headline">
        <span>Producto de: </span>
        <a className="sectionHero__link" href={storeURL}>
          {storeName}
        </a>
      </h3>
    </div>
  </header>
)

ProductHeader.propTypes = {
  storeURL: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
}

class ProductPage extends Component {
  constructor() {
    super()

    this.state = {
      error: false,
      loading: true,
      category: {},
      deliveryPrice: 'Missing prop',
      imageAlt: 'Missing prop',
      image: '',
      description: '',
      name: '',
      price: 0,
      storeName: '',
      storeURL: 'Missing prop',
      errorLoading: null,
    }
  }

  componentWillMount() {
    request
      .get(`/api/products/${this.props.match.params.productID}`)
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body.product)
        }

        if (err) {
          this.setState({
            errorLoading: 'Hay un error cargando el producto, intenta de nuevo',
            loading: false,
          })
        } else {
          this.setState({
            ...res.body.product,
            loading: false,
          })
        }
      })
  }

  render() {
    const {
      category,
      deliveryPrice,
      imageAlt,
      image,
      description,
      name,
      price,
      loading,
      errorLoading,
      ...headerProps
    } = this.state

    const {
      match,
    } = this.props

    const orderURL = `${PRODUCT_PATH}/${match.params.productID}${ORDERS_PATH}`

    if (loading || errorLoading) {
      return <div className="container">{errorLoading || 'Cargando...'}</div>
    }

    return (
      <div>
        <ProductHeader {...headerProps} />

        <section className="container product">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <img src={image} className="product__image img-responsive" alt={imageAlt} />
            </div>

            <div className="product__caption caption col-xs-12 col-sm-6">

              <header className="clearfix">
                <h1 className="product__name">
                  {name}
                </h1>
                <h2 className="product__price">
                  {price}
                </h2>
                <h4>
                  <span className="label label-default">+ Envío $ {deliveryPrice}</span>
                </h4>
                <hr />
              </header>

              <div className="product__description">
                <p>
                  <b>Descripción:</b>
                </p>
                <div>{description}</div>
              </div>

              <br />
              <hr />

              <p className="align-left">
                <b>Categoría:</b>
                <a className="category__link" href={category.links.products}>
                  {category.name}
                </a>
              </p>

              <hr />
              <div>
                <Link className="btn btn-primary btn-lg btn-block" to={orderURL} >
                  Comprar
                </Link>
              </div>
              <hr />

            </div>
          </div>
        </section>
      </div>
    )
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productID: PropTypes.string,
    }),
  }),
}

export default ProductPage
