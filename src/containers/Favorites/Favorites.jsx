import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites } from '../../store/favoritesReducer'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  if (favorites.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Избранное пусто
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Избранные акции
      </Typography>
      {favorites.map((stock, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{stock.symbol}</Typography>
              <Typography variant="body2">Дата: {stock.date?.slice(0, 10)}</Typography>
              <Typography variant="body2">Open: {stock.open}</Typography>
              <Typography variant="body2">High: {stock.high}</Typography>
              <Typography variant="body2">Low: {stock.low}</Typography>
              <Typography variant="body2">Close: {stock.close}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                color="error"
                onClick={() => dispatch(removeFromFavorites(index))}
              >
                <DeleteIcon />
              </IconButton>
              <Button
                size="small"
                color="error"
                onClick={() => dispatch(removeFromFavorites(index))}
              >
                Удалить
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default Favorites
