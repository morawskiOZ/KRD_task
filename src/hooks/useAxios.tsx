import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import { Actions } from "../globalState/actions"

const useAxios = (
  request: AxiosRequestConfig,
  dependency: string | number | null,
  dispatch?: any,
  action?: Actions,
  query?: string | number
) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (query === "") {
      return
    }
    const req = async () => {
      setLoading(true)
      dispatch && dispatch({ type: Actions.START_LOADING })
      try {
        const response = await axios(request)
        if (response.statusText === "OK") {
          const body = response.data
          setData(body)
          dispatch && dispatch({ type: Actions.SET_ERROR, error: null })
          dispatch && action && dispatch({ type: action, data: body })
        } else {
          setError(response.statusText)
          dispatch &&
            dispatch({ type: Actions.SET_ERROR, error: response.statusText })
        }
      } catch (error) {
        setError(error.statusText)
        dispatch &&
          dispatch({ type: Actions.SET_ERROR, error: error.statusText })
      }
      setLoading(false)
      dispatch && dispatch({ type: Actions.FINISH_LOADING })
    }
    req()
  }, [dependency])
  return { error, loading, data }
}

export default useAxios
