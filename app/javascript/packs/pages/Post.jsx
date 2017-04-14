import React, { Component } from 'react'
import PropTypes from 'prop-types'
import request from 'superagent'
import '../assets-style/pages/Post.scss'

class PostPage extends Component {
  constructor() {
    super()

    this.state = {
      error: false,
      loading: true,
    }
  }

  componentWillMount() {
    request
      .get(`/api/blog/post/${this.props.params.postID}`)
      .end((err, res) => {
        if (err) {
          this.setState({
            errorLoading: 'Hay un error cargando el post, intenta de nuevo',
            loading: false,
          })
        } else {
          this.setState({
            ...res.body.data,
            loading: false,
          })
        }
      })
  }

  render() {
    const {
      title,
      author,
      date,
      imageURL,
      content,
      loading,
      errorLoading,
    } = this.state

    if (loading || errorLoading) {
      return <div className="container">{errorLoading || 'Cargando...'}</div>
    }

    return (
      <article className="col-md-12">
        <div className="post__container">
          <h2 className="post__title">{ title }</h2>
          <p>Creado por: { author } - { date }</p>
          <hr />
          <div className="post__content">
            <img src={imageURL} className="img-responsive post__image" alt="" />
            <div>
              <p className="post__text">{ content }</p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

PostPage.propTypes = {
  params: PropTypes.shape({
    postID: PropTypes.string,
  }),
}

export default PostPage
