import { useEffect, useState } from "react"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

const useAxios = (request: AxiosRequestConfig, dependency: string | number | null) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!dependency){
      return
    }
    const req = async () => {
      setLoading(true)
      try {
        const response = await axios(request)
        debugger
        if (response.statusText === "OK") {
          const body = response.data
          setData(body)
        } else {
          setError(response.statusText)
        }
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    req()
  }, [dependency])
  return { error, loading, data }
}

export default useAxios
