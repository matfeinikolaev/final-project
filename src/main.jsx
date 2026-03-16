import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router'
import './styles/styles.css'

import { StyledEngineProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import { store } from './store/store'

const root = createRoot(document.getElementById('root'))
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StyledEngineProvider>,
)