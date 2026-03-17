import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const StockCard = ({ symbol, date, open, high, low, close, onAction, actionLabel = 'В избранное', disabled = false }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6">{symbol}</Typography>
      {date && (
        <Typography variant="body2" color="text.secondary">
          {date.slice(0, 10)}
        </Typography>
      )}
      <Typography variant="body2">Open: {open}</Typography>
      <Typography variant="body2">High: {high}</Typography>
      <Typography variant="body2">Low: {low}</Typography>
      <Typography variant="body2">Close: {close}</Typography>
    </CardContent>
    {onAction && (
      <CardActions>
        <Button size="small" onClick={onAction} disabled={disabled}>
          {actionLabel}
        </Button>
      </CardActions>
    )}
  </Card>
)

export default StockCard
