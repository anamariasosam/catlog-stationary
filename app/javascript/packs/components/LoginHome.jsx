import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import './styles/LoginHome.scss'

const loginCode = '98875d9172fdf6262707e064a259948646687cbd1a7ef561b33f081a8a739c27'
const storecode = '94d293e03fddf4809f11425f10eccdbb7015737b47596132773c9b8f12b5e8c9'

const CLIENT_ID = 'client_id=c4287a1f452d4a678dba991f142cecca'
const REDIRECT_URI = encodeURI('redirect_uri=http://localhost:3000/users/auth/instagram/callback')
const INSTAGRAM_URL = 'https://api.instagram.com/oauth/authorize/'
const RESPONSE = 'response_type=token'
const LOGIN_URL = `${INSTAGRAM_URL}?${CLIENT_ID}&${REDIRECT_URI}&${RESPONSE}`

const LoginHome = ({ authenticated }) => (
  <div className="container">
    <header>
      <h3>Inicia Sesión</h3>
    </header>
    <div className="row">
      <div className="col-sm-6">
        <a className="login__link js_instagramLoad" href={`${LOGIN_URL}&user=buyer`}>
          <div className="login__box">
            <div className="panel-body text-center">
              {/* <img
                className="img-responsive img-circle login__image"
                src={`https://catlog.co/assets/fan-${loginCode}.png`}
                role="presentation"
              /> */}
              <h4 className="login__headline">Comprar a un Click</h4>
              <p className="login__deck">Inicia sesión en el ícono de arriba para
                <b> comprar </b>
                rápidamente productos de Instagram.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-sm-6">
        <a className="login__link js_instagramLoad" href={`${LOGIN_URL}&user=seller`}>
          <div className="login__box">
            <div className="panel-body text-center">
              {/* <img
                className="img-responsive img-circle login__image"
                src={`https://catlog.co/assets/store-${storecode}.png`}
                role="presentation"
              /> */}
              <h4 className="login__headline">Vender a un Click</h4>
              <p className="login__deck">
                Inicia sesión dando click en el ícono de
                <b> tienda </b>
                para vender tus productos de Instagram.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
)

LoginHome.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })

export default connect(mapStateToProps)(LoginHome)
