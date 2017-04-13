import React, {
  Component,
} from 'react'
import request from 'superagent'

import PostItem from '../components/PostItem'

export default class RecentPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: null,
    }
  }
  componentWillMount() {
    request
      .get('/api/posts?latest=true')
      .end((err, res) => {
        this.setState({
          posts: res.body.posts,
        })
      })
  }

  render() {
    if (!this.state.posts) {
      // blank state
      return <p>No hay productos recientes</p>
    }

    return (
      <section className="container">
        <header>
          <h3>Posts mas recientes</h3>
        </header>

        <div>
          {/* TODO: Remove index and replace with product id after the real API */}
          {this.state.posts.map((post, i) => (
            <PostItem {...post} key={i} />
          ))}
        </div>
      </section>
    )
  }
}
