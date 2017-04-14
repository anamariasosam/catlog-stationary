import React, { Component } from 'react'

import '../assets-style/components/Footer.scss'

const FooterExpanded = () => (
  <footer className="footer__information js_footerInfo" >
    <div className="container">
      <div className="row footer-links hide-xs">
        <div className="col-md-3 columns">
          <h5 className="footer__headline">Compañía</h5>
          <ul className="footer__list">
            <li>
              <a className="footer__infoLink" href="/pages/about_us">Qué es catlog.co</a>
            </li>
            <li>
              <a
                className="footer__infoLink"
                // eslint-disable-next-line
                href="http://pulsosocial.com/2016/07/09/futuro-del-e-commerce-latam-instagram-conoce-la-emprendedora-millenial-lo-esta-impulsando/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Menciones de prensa
              </a>
            </li>
            <li>
              <img
                alt="Trust Logo"
                // eslint-disable-next-line
                src="https://trustlogo.com/images/new-trustlogos/comodo_secure_seal_76x26_transp.png"
                // eslint-disable-next-line
                data-original="https://trustlogo.com/images/new-trustlogos/comodo_secure_seal_76x26_transp.png"
              />
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5 className="footer__headline">Servicio al Cliente</h5>
          <ul className="footer__list">
            <li>
              <a className="footer__infoLink" href="/pages/faq">Preguntas</a>
            </li>
            <li>
              <a className="footer__infoLink" href="/pages/orders_and_returns">
                Órdenes &amp; Devoluciones
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5 className="footer__headline">Mi Cuenta</h5>
          <ul className="footer__list">
            <li>
              Necesitas iniciar sesión.
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5 className="footer__headline">Contact Us</h5>
          <ul className="footer__list">
            <li>
              <a className="footer__infoLink" href="/contacto">Déjanos un mensaje</a>
            </li>
            <li>
              <a className="footer__infoLink" href="/contacto">
                <i className="fa fa-map-marker" /> Atom House -  Calle 8 # 43a-­49, Medellín
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
)

export default class Footer extends Component {
  constructor() {
    super()

    this.state = {
      footerOpen: false,
    }

    this.toggleExpandedFooter = ::this.toggleExpandedFooter
  }

  render() {
    return (
      <footer>
        <div className="footer">
          <div className="container">
            <p className="footer__text">
              Made with &nbsp;
              <i className="fa fa-heart" />
              <span className="footer__second">
                &nbsp;&nbsp;by
                <a
                  href="http://anamariasosa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  &nbsp;Ana María Sosa&nbsp;
                </a>
                ©
                2016
              </span>
              <button className="pull-right" onClick={this.toggleExpandedFooter}>
                <i className="fa footer__help js_footerHelp fa-times-circle" />
              </button>
            </p>
          </div>
        </div>
        {this.state.footerOpen &&
          <FooterExpanded />
        }
      </footer>
    )
  }

  toggleExpandedFooter() {
    this.setState({
      footerOpen: !this.state.footerOpen,
    })
    // TODO: scroll top to show the expanded footer easily
  }
}
