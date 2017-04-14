import React, {
  Component,
} from 'react'
import superagent from 'superagent'

import PostItem from '../components/PostItem'

export default class RecentPosts extends Component {
  constructor() {
    super()

    this.state = {
      posts: null,
    }

    this.populatePosts = ::this.populatePosts
  }

  componentWillMount() {
    this.populatePosts()
  }

  render() {
    if (!this.state.posts) {
      // blank state
      return (
        <section className="container">
          <p>No hay posts</p>
        </section>
      )
    }

    const { posts } = this.state

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

  populatePosts() {
    superagent
      .get('/api/posts?latest=true')
      .end((err, res) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line
          console.log(res.req.url, res.body)
        }

        if (err) return

        this.setState({ posts: res.body })
      })
  }
}
