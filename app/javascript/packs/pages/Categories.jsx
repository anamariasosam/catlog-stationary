import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import superagent from 'superagent'

import CategoriesHeader from '../components/CategoriesHeader'
import CategoryAdLine from '../components/CategoryAdLine'
import Thumb from '../components/Thumb'

class Categories extends Component {
  constructor() {
    super()

    this.state = {
      currentPage: 0,
      pageCount: 2,
      products: [],
    }

    this.handlePageClick = ::this.handlePageClick
    this.setProducts = ::this.setProducts
  }

  componentDidMount() {
    // TODO: use one method to load products either from page 0 or selected page e.g. 2..3
    superagent
      .get('/api/products')
      .end(this.setProducts)
  }

  render() {
    const categoryName = this.props.match.params.categoryName || 'todo'
    const { products } = this.state

    return (
      <div>
        <CategoriesHeader current={categoryName} />

        <CategoryAdLine />

        {products.map(product => <Thumb {...product} key={product.id}/> )}

        <div className="text-center">
          <ReactPaginate
            // this key resets the counter when change page
            key={categoryName}
            activeClassName="active"
            breakClassName="break-me"
            breakLabel={<a href="">...</a>}
            containerClassName="pagination"
            marginPagesDisplayed={2}
            nextLabel="Siguiente"
            onPageChange={this.handlePageClick}
            pageCount={this.state.pageCount}
            pageRangeDisplayed={5}
            previousLabel="Anterior"
            subContainerClassName="pages pagination"
          />
        </div>
      </div>
    )
  }

  handlePageClick({ selected }) {
    superagent
      .get(`/api/products?page=${selected}`)
      .end(this.setProducts)
  }

  setProducts(err, res) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      console.log(res.req.url, res.body)
    }

    if (err) { throw new Error(err) }

    this.setState({ products: res.body })
  }
}

Categories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryName: PropTypes.string,
    }),
  }),
}

export default Categories
