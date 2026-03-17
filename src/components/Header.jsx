import { NavLink, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/exchanges', label: 'Биржи' },
  { to: '/tickers', label: 'Тикеры' },
  { to: '/eod', label: 'EOD' },
]

const activeStyle = {
  bgcolor: 'rgba(255,255,255,0.2)',
  '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
}

const Header = () => {
  const favorites = useSelector((state) => state.favorites)
  const location = useLocation()
  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 1, flexWrap: 'wrap' }}>
        <TrendingUpIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ mr: 2, flexGrow: 0 }}>
          StockExplorer
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
          {navItems.map(({ to, label }) => (
            <Button
              key={to}
              color="inherit"
              component={NavLink}
              to={to}
              sx={isActive(to) ? activeStyle : {}}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Badge badgeContent={favorites.length} color="error" showZero>
          <Button
            color="inherit"
            component={NavLink}
            to="/favorites"
            startIcon={<FavoriteIcon />}
            sx={isActive('/favorites') ? activeStyle : {}}
          >
            Избранное
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default Header
