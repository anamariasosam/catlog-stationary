import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import request from 'superagent'

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
    request
      .get('/api/products')
      .end(this.setProducts)
  }

  render() {
    const categoryName = this.props.match.params.categoryName || 'todo'

    return (
      <div>
        <CategoriesHeader current={categoryName} />

        <CategoryAdLine />

        {/* TODO: Remove index and replace with product id after the real API */}
        {this.state.products.map((product, i) => (
          <div className="col-xs-6 col-sm-3" key={i}>
            <Thumb {...product} />
          </div>
        ))}
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
    request
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
