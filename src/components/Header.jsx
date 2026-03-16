import { NavLink, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/exchanges', label: 'Exchanges' },
  { to: '/tickers', label: 'Tickers' },
  { to: '/eod', label: 'EOD' },
]

const Header = () => {
  const favorites = useSelector((state) => state.favorites)
  const location = useLocation()

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 1, flexWrap: 'wrap' }}>
        {navItems.map(({ to, label }) => (
          <Button
            key={to}
            color="inherit"
            component={NavLink}
            to={to}
            variant={location.pathname === to ? 'contained' : 'text'}
            sx={{
              ...(location.pathname === to && {
                bgcolor: 'rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
              }),
            }}
          >
            {label}
          </Button>
        ))}
        <Badge
          badgeContent={favorites.length}
          showZero
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
            },
          }}
        >
          <Button
            color="inherit"
            component={NavLink}
            to="/favorites"
            variant={location.pathname === '/favorites' ? 'contained' : 'text'}
            sx={{
              ...(location.pathname === '/favorites' && {
                bgcolor: 'rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
              }),
            }}
          >
            Избранное
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default Header