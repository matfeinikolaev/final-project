import { getApiResource, getQueryParams } from '../utils'
import { API_HEADERS, API_BASE_URL } from '../constants'
const VITE_MARKETSTACK_API_KEY = import.meta.env.VITE_MARKETSTACK_API_KEY

export const getEOD = async (symbols = '') => {
  const init = {
    method: 'GET',
    headers: API_HEADERS,
  }
  const data = await getApiResource(
    `${API_BASE_URL}/eod?access_key=${VITE_MARKETSTACK_API_KEY}&symbols=${symbols}`,
    init,
  )

  return data
}

export const getTickers = async (exchange = '') => {
  const init = {
    method: 'GET',
    headers: API_HEADERS,
  }
  const data = await getApiResource(
    `${API_BASE_URL}/tickers?access_key=${VITE_MARKETSTACK_API_KEY}&exchange=${exchange}`,
    init,
  )

  return data
}

export const getExchanges = async () => {
  const init = {
    method: 'GET',
    headers: API_HEADERS,
  }
  const data = await getApiResource(
    `${API_BASE_URL}/exchanges?access_key=${VITE_MARKETSTACK_API_KEY}`,
    init,
  )

  return data
}

export const getList = async (params = {}) => {
  const queryParams = getQueryParams(params)

  const init = {
    method: 'GET',
    headers: API_HEADERS,
  }
  const data = await getApiResource(
    `${API_BASE_URL}/api/v2.2/films?${queryParams}`,
    init,
  )

  return data.items
}

export const search = async (params = {}) => {
  const queryParams = getQueryParams(params)

  const init = {
    method: 'GET',
    headers: API_HEADERS,
  }
  const data = await getApiResource(
    `${API_BASE_URL}/api/v2.1/films/search-by-keyword?${queryParams}`,
    init,
  )

  return data.films
}