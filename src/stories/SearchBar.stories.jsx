import { useState } from 'react'
import SearchBar from '../components/SearchBar'

export default {
  title: 'UI/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
}

const SearchBarWithState = () => {
  const [value, setValue] = useState('')
  return (
    <SearchBar
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Поиск по тикерам..."
    />
  )
}

export const Default = {
  render: () => <SearchBarWithState />,
}
