import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const App = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
    <Header />
    <Container component="main" maxWidth="md" sx={{ flexGrow: 1, py: 2 }}>
      <Outlet />
    </Container>
  </Box>
)

export default App
