// export const getApiResource = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log("Error!!!", error.message));
// };

export const getApiResource = async (url, init = {}) => {
  try {
    const response = await fetch(url, init)

    if (!response.ok) {
      console.error('Ошибка: ', response.status)
      // throw new Error('Error')
      return false
    }

    const data = await response.json()
    
    return data.data
  } catch (error) {
    console.error('Ошибка:', error.message)
    return false
  }
}

// UiComponent -> Action -> Util Fetch

export const getQueryParams = (params = {}) => {
  const queryParams = new URLSearchParams(params).toString()

  return queryParams
}