import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import '../assets-style/components/Thumb.scss'

const Thumb = ({
  alt,
  href,
  imageURL,
  ownerURL,
  name,
  price,
}) => (
  <div className="thumbnail">
    <a href={href}>
      <img alt={alt} className="thumbnail__image" src={imageURL} />
    </a>
    <div className="caption">
      <h3 className="thumbnail__name">
        <Link className="thumbnail__link" to={href}>
          {name}
        </Link>
      </h3>

      <p className="thumbnail__price">
        ${price}
      </p>

    </div>
  </div>
)

Thumb.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  ownerURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Thumb
