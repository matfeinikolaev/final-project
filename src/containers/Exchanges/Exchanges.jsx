import { useState, useEffect } from 'react'
import { getExchanges } from '../../api/actions/marketstack'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router'

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await getExchanges()
      if (response) setExchanges(response)
      else setError('Не удалось загрузить биржи')
      setLoading(false)
    })()
  }, [])

  const filtered = exchanges.filter(
    (ec) =>
      ec.name.toLowerCase().includes(search.toLowerCase()) ||
      ec.acronym?.toLowerCase().includes(search.toLowerCase()) ||
      ec.country_code?.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Биржи
      </Typography>
      <TextField
        fullWidth
        label="Поиск по названию, акрониму или стране"
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
        filtered.map((ec) => (
          <Card key={ec.mic} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {ec.acronym}
              </Typography>
              <Typography variant="h5" component="div">
                {ec.name}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                {ec.mic}
              </Typography>
              <Typography variant="body2">Страна: {ec.country_code}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/tickers?exchange=' + ec.mic)}>
                Смотреть тикеры
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  )
}

export default Exchanges
