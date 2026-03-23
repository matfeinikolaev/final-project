import { createHashRouter } from 'react-router'

import App from './containers/App'
import Tickers from './containers/Tickers'
import Home from './containers/Home'
import EOD from './containers/EOD'
import Exchanges from './containers/Exchanges'
import Favorites from './containers/Favorites'

export const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'exchanges', Component: Exchanges },
      { path: 'tickers', Component: Tickers },
      { path: 'eod', Component: EOD },
      { path: 'favorites', Component: Favorites },
    ],
  },
])
