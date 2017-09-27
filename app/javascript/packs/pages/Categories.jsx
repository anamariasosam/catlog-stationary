import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import superagent from 'superagent'
import axios from 'axios'

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
      categories: [],
    }

    this.handlePageClick = ::this.handlePageClick
    this.setProducts = ::this.setProducts
    this.populateCategories = ::this.populateCategories
    this.populateAllProducts = ::this.populateAllProducts
    this.populateCategoryProducts = ::this.populateCategoryProducts
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.categoryName !== prevProps.match.params.categoryName) {
      console.log(this.props.match.params.categoryName, prevProps.match.params.categoryName);
      this.populateCategories()
    }
  }

  componentDidMount() {
    // TODO: use one method to load products either from page 0 or selected page e.g. 2..3
    this.populateCategories()
  }

  render() {
    const categoryName = this.props.match.params.categoryName || 'todo'
    const { products } = this.state
    const { categories } = this.state

    return (
      <div>
        <CategoriesHeader categories={categories} />

        <CategoryAdLine />

        <div className="clearfix">
          {products.map(product => <Thumb {...product} key={product.id}/> )}
        </div>


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
      .get(`/api/products?page=${selected + 1}`)
      .end(this.setProducts)
  }

  setProducts(err, res) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      console.log(res.req.url, res.body.products)
    }

    if (err) { throw new Error(err) }

    this.setState({ products: res.body.products })
  }

  populateCategories() {
    return superagent
      .get('/api/categories').end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body.categories, res.length)
        }

        if (err) return

        this.setState({ categories: res.body.categories }, () => {
          const categoryName = this.props.match.params.categoryName || 'todo'

          if (categoryName !== 'todo') {
            this.populateCategoryProducts(categoryName)
          }
        })
      })
  }

  populateAllProducts() {
    superagent
      .get('/api/products')
      .end(this.setProducts)
  }

  populateCategoryProducts(name) {
    const { id } = this.state.categories.find((obj) => obj.name.toLowerCase() === name)

    superagent
      .get(`/aaaaaaaaaaaaaaa/${id}`)
      .end(this.setProducts)
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
