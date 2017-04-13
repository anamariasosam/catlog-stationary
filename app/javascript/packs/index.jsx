// import React from 'react'
// import { render } from 'react-dom'
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { AppContainer } from 'react-hot-loader'
//
// import App from './App'

/*
 * NOTICE
 * if you get weird errors refering to AppContainer (this only happen on dev = hot-loader)
 * just comment the render from AppContainer and uncomment the regular render
 * you lose the hot reload but is useful until you finish the debug.

  render(
    <App />,
    document.getElementById('catlog')
  )
 */

// const rootEl = document.getElementById('catlog')
//
// render(
//   <AppContainer>
//     <App />
//   </AppContainer>
//   , rootEl)
//
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     // eslint-disable-next-line global-require
//     const NextApp = require('./App').default
//     render(
//       <AppContainer>
//         <NextApp />
//       </AppContainer>,
//       rootEl,
//     )
//   })
// }
