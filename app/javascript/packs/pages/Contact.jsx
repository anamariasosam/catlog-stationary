import React from 'react'

const Contact = () => (
  <div>
    <header className="sectionHero hidden-xs">
      <div className="container">
        <h3 className="sectionHero__headline">
          Contacto
        </h3>
      </div>
    </header>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <br />
          <p>Cuéntanos cómo podemos ayudarte.</p>

          <form id="contact-form" action="/contacto" acceptCharset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="✓" />

            <div className="form-group">
              <label htmlFor="contact_name">Nombre</label>
              <input
                className="form-control"
                id="contact_name"
                name="contact[name]"
                type="text"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact_email">E-mail</label>
              <input
                className="form-control"
                id="contact_email"
                name="contact[email]"
                type="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact_message">Mensaje</label>
              <textarea
                className="form-control"
                cols="30"
                id="contact_message"
                name="contact[message]"
                rows="9"
              />
            </div>

            <div className="form-group">
              <input
                className="btn btn-primary pull-right"
                name="contact[submit]"
                type="submit"
                value="Enviar Mensaje"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <br />
          <iframe
            allowFullScreen=""
            frameBorder="0"
            height="450"
            // eslint-disable-next-line
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.412518884613!2d-75.57385304909272!3d6.209195995483062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282a434063c3%3A0xb6f80e6aef287814!2sAtomhouse!5e0!3m2!1sen!2sco!4v1469032888496"
            style={{ border: 0 }}
            width="100%"
          />
        </div>
      </div>
    </div>
    <br />
  </div>
)

export default Contact
