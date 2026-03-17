import StockCard from '../components/StockCard'

export default {
  title: 'UI/StockCard',
  component: StockCard,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    symbol: 'AAPL',
    date: '2024-01-15T00:00:00+0000',
    open: 185.5,
    high: 188.2,
    low: 184.1,
    close: 187.3,
    actionLabel: 'В избранное',
  },
}

export const Saved = {
  args: {
    ...Default.args,
    actionLabel: 'Сохранено',
    disabled: true,
  },
}

export const NoAction = {
  args: {
    symbol: 'GOOGL',
    date: '2024-01-15T00:00:00+0000',
    open: 140.0,
    high: 142.5,
    low: 139.0,
    close: 141.8,
  },
}
