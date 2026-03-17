import { useState, useEffect } from 'react'
import { getTickers, getExchanges } from '../../api/actions/marketstack'
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
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const Tickers = () => {
  const [tickers, setTickers] = useState([])
  const [exchanges, setExchanges] = useState([])
  const [selectedExchange, setSelectedExchange] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    ;(async () => {
      const response = await getExchanges()
      if (response) setExchanges(response)
    })()
  }, [])

  useEffect(() => {
    const exchange = searchParams.get('exchange') || ''
    ;(async () => {
      setSelectedExchange(exchange)
      setLoading(true)
      setError(null)
      const response = await getTickers(exchange)
      if (response) setTickers(response)
      else setError('Не удалось загрузить тикеры')
      setLoading(false)
    })()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = async (event) => {
    const value = event.target.value
    setSelectedExchange(value)
    setLoading(true)
    setError(null)
    const response = await getTickers(value)
    if (response) setTickers(response)
    else setError('Не удалось загрузить тикеры')
    setLoading(false)
  }

  const filtered = tickers.filter(
    (t) =>
      t.name?.toLowerCase().includes(search.toLowerCase()) ||
      t.symbol?.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Тикеры
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="exchange-select-label">Биржа</InputLabel>
        <Select
          labelId="exchange-select-label"
          value={selectedExchange}
          label="Биржа"
          onChange={handleChange}
        >
          <MenuItem value="">Все</MenuItem>
          {exchanges.map((ec) => (
            <MenuItem key={ec.mic} value={ec.mic}>
              {ec.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Поиск по названию или символу"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        filtered.map((ticker) => (
          <Card key={ticker.symbol} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{ticker.name}</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                {ticker.symbol}
              </Typography>
              <Typography variant="body2">
                Биржа: {ticker.stock_exchange?.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/eod?symbols=' + ticker.symbol)}>
                EOD данные
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  )
}

export default Tickers
