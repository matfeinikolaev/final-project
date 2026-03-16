import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Box from '@mui/material/Box'

const App = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default App