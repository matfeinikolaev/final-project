import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <TrendingUpIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        Stock Market Explorer
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Просматривайте биржи, тикеры и исторические данные акций через Marketstack API
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={() => navigate('/exchanges')}>
          Биржи
        </Button>
        <Button variant="outlined" onClick={() => navigate('/tickers')}>
          Тикеры
        </Button>
        <Button variant="outlined" onClick={() => navigate('/eod')}>
          EOD данные
        </Button>
      </Stack>
    </Box>
  )
}

export default Home
