const API_KEY = import.meta.env.MARKETSTACK_API_KEY

export const API_BASE_URL = 'https://corsproxy.io/?http://api.marketstack.com/v1'
export const API_HEADERS = {
  'X-API-KEY': API_KEY,
  'Content-Type': 'application/json',
}