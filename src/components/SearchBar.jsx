import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ value, onChange, placeholder = 'Поиск...' }) => (
  <TextField
    fullWidth
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
)

export default SearchBar
