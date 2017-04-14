import React from 'react'

import '../assets-style/pages/Stores.scss'

const Stores = () => (
  <div>
    <header className="storeHero">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-1">
            <img src="" alt="Calzado Paso Azul" />
            <h2 className="app__list-headline">
              Calzado Paso Azul
            </h2>
          </div>
          <div className="col-md-5">
            <div className="store__description">
              Calzado Nacional para toda la familia Cra 51 # 44-22
              Medellin - Colombia;
              Horario de atención: 9 am - 6.30 pm.
              Envíos a todo el país
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container">

      <div className="row">
        <div className="col-sm-3 text-center">
          <div className="store__info">
            <span className="app__bold-text">Correo Electrónico</span> <br />
            <a href="mailto:calzadopasoazul@gmail.com">calzadopasoazul@gmail.com</a>
          </div>
        </div>

        <div className="col-sm-3 text-center">
          <div className="store__info">
            <span className="app__bold-text">Celular</span> <br />
            <span id="phone_number">
              <a href="tel:316-867-9318" className="track" data-track="tel">
                316-867-9318
              </a>
            </span>
          </div>
        </div>

        <div className="col-sm-3 text-center">
          <div className="store__info">
            <span className="app__bold-text">Redes Sociales</span> <br />
            <a
              href="http://www.instagram.com/pasoazul_calzado"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram store__socialIcon" />
            </a>

            <a
              href="http://www.facebook.com/pasoazul.calzado"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook store__socialIcon" />
            </a>
            <i className="fa fa-twitter store__socialIcon" />
            <i className="fa fa-snapchat-ghost store__socialIcon" />
          </div>
        </div>

        <div className="col-sm-3 text-center">
          <div className="store__info">
            <span className="app__bold-text">Ubicación</span> <br />
            Medellin - Colombia
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Stores
