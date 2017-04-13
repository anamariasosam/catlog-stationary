import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import request from 'superagent'

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
    }
  }

  componentWillMount() {
    request
      .get(`/api/product/${this.props.params.productID}`)
      .end((err, res) => {
        if (err) {
          this.setState({
            errorLoading: 'Hay un error cargando el producto, intenta de nuevo',
            loading: false,
          })
        } else {
          this.setState({
            ...res.body,
            loading: false,
          })
        }
      })
  }

  render() {
    const {
      categoryName,
      categoryURL,
      deliveryPrice,
      imageAlt,
      imageURL,
      productDescription,
      productName,
      productPrice,
      storeName,
      storeURL,
      loading,
      errorLoading,
    } = this.state

    const {
      params,
    } = this.props

    const orderURL = `/producto/${params.productID}/orden`

    if (loading || errorLoading) {
      return <div className="container">{errorLoading || 'Cargando...'}</div>
    }

    return (
      <div>
        <ProductHeader storeName={storeName} storeURL={storeURL} />

        <section className="container product">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <img src={imageURL} className="product__image img-responsive" alt={imageAlt} />
            </div>

            <div className="product__caption caption col-xs-12 col-sm-6">

              <header className="clearfix">
                <h1 className="product__name">
                  {productName}
                </h1>
                <h2 className="product__price">
                  {productPrice}
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
                <div>{productDescription}</div>
              </div>

              <br />
              <hr />

              <p className="align-left">
                <b>Categoría:</b>
                <a className="category__link" href={categoryURL}>
                  {categoryName}
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
  params: PropTypes.shape({
    productID: PropTypes.string,
  }),
}

export default ProductPage
