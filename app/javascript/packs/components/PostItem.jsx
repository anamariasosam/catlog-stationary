import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../assets-style/components/PostItem.scss'


const PostItem = ({
  title,
  content,
  imageURL,
  href,
}) => (
  <div className="postItem__container clearfix">
    <div className="col-md-6 postItem__image">
      <a href={href}>
        <img
          src={imageURL}
          className="img-responsive"
          alt=""
        />
      </a>
    </div>
    <div className="col-md-6 postItem__details">
      <h3 className="postItem__title">
        <Link className="postItem__title-link" to={href}>
          {title}
        </Link>
      </h3>
      <p className="postItem__description">
        { content }
      </p>
      <div className="postItem__button">
        <a href={href} className="postItem__button-link">Read More</a>
      </div>
    </div>
  </div>
)

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default PostItem
