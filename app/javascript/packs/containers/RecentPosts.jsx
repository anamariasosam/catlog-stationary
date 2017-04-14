import React, { Component } from 'react'

import Loader from './HOCLoader'
import PostItem from '../components/PostItem'

class RecentPosts extends Component {

  render() {
    if (!this.props.items) {
      // blank state
      return (
        <section className="container">
          <p>No hay posts</p>
        </section>
      )
    }

    const { items: posts } = this.props

    return (
      <section className="container">
        <header>
          <h3>Posts mas recientes</h3>
        </header>

        <div>
          {/* TODO: Remove index and replace with product id after the real API */}
          {posts.map((post, i) => (
            <PostItem {...post} key={i} />
          ))}
        </div>
      </section>
    )
  }

}

export default Loader({
  api: 'posts',
})(RecentPosts)
