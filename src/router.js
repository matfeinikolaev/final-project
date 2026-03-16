import { createBrowserRouter } from 'react-router'

import App from './containers/App'
import Tickers from './containers/Tickers'
// import Film from './containers/Film'
// import SearchFilms from './containers/SearchFilms'
import Home from './containers/Home'
import EOD from './containers/EOD'
import Exchanges from './containers/Exchanges'
// import Favorites from './containers/Favorites'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          // path: "films",
          index: true,
          Component: Home,
        },
        {
          path: 'exchanges',
          Component: Exchanges,
        },
        {
          path: 'tickers',
          Component: Tickers,
        },
        {
          path: 'eod',
          Component: EOD,
        },
        // {
        //   path: 'film/:id',
        //   Component: Film,
        // },
        // {
        //   path: 'favorites',
        //   Component: Favorites,
        // },
      ],
    },
  ],
//   {
//     basename: '/react-final',
//   },
)