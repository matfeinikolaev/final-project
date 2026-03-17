import { useState, useEffect } from 'react'
import { getTickers, getEOD } from '../../api/actions/marketstack'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import { addToFavorites } from '../../store/favoritesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const EOD = () => {
  const [eod, setEod] = useState([])
  const [symbols, setSymbols] = useState([])
  const [selectedSymbols, setSelectedSymbols] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams()
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const response = await getTickers()
      if (response) setSymbols(response)
    })()
  }, [])

  useEffect(() => {
    const sym = searchParams.get('symbols')
    if (!sym) return
    ;(async () => {
      setSelectedSymbols([sym])
      setLoading(true)
      setError(null)
      const response = await getEOD(sym)
      if (response) setEod(response)
      else setError('Не удалось загрузить данные')
      setLoading(false)
    })()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = async (event) => {
    const value = event.target.value
    setSelectedSymbols(value)
    if (value.length === 0) {
      setEod([])
      return
    }
    setLoading(true)
    setError(null)
    const response = await getEOD(value.join(','))
    if (response) setEod(response)
    else setError('Не удалось загрузить данные')
    setLoading(false)
  }

  const isSaved = (stock) =>
    favorites.some((f) => f.symbol === stock.symbol && f.date === stock.date)

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        End-of-Day данные
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="eod-select-label">Тикеры</InputLabel>
        <Select
          labelId="eod-select-label"
          value={selectedSymbols}
          label="Тикеры"
          onChange={handleChange}
          multiple
        >
          {symbols.map((s) => (
            <MenuItem key={s.symbol} value={s.symbol}>
              {s.symbol} — {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        (eod || []).map((stock, index) => (
          <Card key={index} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{stock.symbol}</Typography>
              <Typography variant="body2" color="text.secondary">
                {stock.date?.slice(0, 10)}
              </Typography>
              <Typography variant="body2">Open: {stock.open}</Typography>
              <Typography variant="body2">High: {stock.high}</Typography>
              <Typography variant="body2">Low: {stock.low}</Typography>
              <Typography variant="body2">Close: {stock.close}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                startIcon={<BookmarkAddIcon />}
                disabled={isSaved(stock)}
                onClick={() => dispatch(addToFavorites(stock))}
              >
                {isSaved(stock) ? 'Сохранено' : 'В избранное'}
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  )
}

export default EOD
