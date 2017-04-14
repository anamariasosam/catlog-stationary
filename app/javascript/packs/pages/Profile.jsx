import React, { Component } from 'react'
import superagent from 'superagent'
import jsonp from 'superagent-jsonp'
import { Link } from 'react-router-dom'

import '../assets-style/pages/Profile.scss'

class ProfilePage extends Component {
  constructor() {
    super()

    this.state = {
      userdata: '',
    }

    try {
      this.token = localStorage.getItem('token')
    } catch (e) {
      throw new Error(e)
    }
  }

  componentWillMount() {
    superagent
      .get(`https://api.instagram.com/v1/users/self/?access_token=${this.token}`)
      .use(jsonp)
      .end((err, res) => {
        // TODO notify user there was an error to load
        if (err) { return }

        this.setState({
          userdata: res.body.data,
        })
      })
  }

  render() {
    const {
      full_name: fullName,
      // username,
      // profile_picture: profilePicture,
    } = this.state.userdata

    return (
      <div className="profile__content">
        <div className="profile__header">
          <div className="container-fluid">
            <h2 className="profile__username">
              <small>Hola,</small> {fullName}
            </h2>
          </div>
        </div>

        <section className="container-fluid updates">
          <div className="row">
            <div className="col-xs-1">
              <div className="updates__icon">
                <i className="fa fa-bell" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="updates__row">
                <p>Actualmente no tienes notificaciones por leer.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="activities__icon">
                <i className="fa fa-heartbeat" />&nbsp;
                <b>Tu Actividad</b>
              </div>
              <p className="activities__row">
                Has comprado 1 Mandala Case hace 21 días por <b>$ 20.000</b>, mira
                <a href="/customers/profile/orders">tus órdenes</a>
                para obtener información sobre el vendedor.
              </p>
              <p className="activities__row">
                Has comprado 1 pulseritas dobles hace 4 meses por <b>$ 9.000</b>, mira
                <a href="/customers/profile/orders">tus órdenes</a>
                para obtener información sobre el vendedor.
              </p>
              <p className="activities__row">
                Has comprado 1 pulsera perlas hace 4 meses por <b>$ 10.000</b>, mira
                <a href="/customers/profile/orders">tus órdenes</a>
                para obtener información sobre el vendedor.
              </p>
              <p className="activities__row">
                Has comprado 1 pulseritas dobles hace 4 meses por <b>$ 9.000</b>, mira
                <a href="/customers/profile/orders">tus órdenes</a>
                para obtener información sobre el vendedor.
              </p>
              <p className="activities__row">
                Has comprado 1 pulseritas dobles hace 4 meses por <b>$ 9.000</b>, mira
                <a href="/customers/profile/orders">tus órdenes</a>
                para obtener información sobre el vendedor.
              </p>

            </div>
            <div className="col-sm-12">
              <div className="activities__icon">
                <i className="fa fa-bullhorn" />&nbsp;
                <b>Te Recomendamos</b>
              </div>
              <p className="activities__row">
                Para mirar los productos de las tiendas de Instagram entra a
                <a href="/products">
                  <i className="fa fa-shopping-bag" />
                  Productos
                </a>.
              </p>
              <p className="activities__row">
                Para comprar, recuerda tener tu cuenta actualizada.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ProfilePage
