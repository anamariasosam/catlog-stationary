import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PRODUCT_PATH } from '../constants/routes'

import '../assets-style/components/Thumb.scss'

const Thumb = ({
  alt,
  id,
  image,
  ownerURL,
  name,
  price,
}) => (
  <div className="thumbnail">
    <Link to={`${PRODUCT_PATH}/${id}`}>
      <img alt={alt} className="thumbnail__image" src={image} />
    </Link>

    <div className="caption">
      <h3 className="thumbnail__name">
        <Link className="thumbnail__link" to={`${PRODUCT_PATH}/${id}`}>
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
  alt: PropTypes.string,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  ownerURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
}

export default Thumb
