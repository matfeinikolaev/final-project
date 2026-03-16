import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Домашняя страница
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Кинопоиск — каталог фильмов и сериалов
      </Typography>
      <Button variant="contained" onClick={() => navigate('/films')}>
        Смотреть список фильмов
      </Button>
    </Box>
  )
}

export default Home