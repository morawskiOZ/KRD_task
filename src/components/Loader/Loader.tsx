import React, { useState, useContext, ReactElement, useEffect } from "react"
import "./Loader.scss"
import { AppContext } from "../../context/context"

const Loader = (): ReactElement => {
  const [percentage, setPercentage] = useState<number>(0)

  const {
    state: { isLoading }
  } = useContext(AppContext)

  let loadingInterval: NodeJS.Timer

  const getRandomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Show fake progress to the user so he know something is happening
  const increasePercentage = (): void => {
    if (percentage < 85) {
      const randomNumber = getRandomIntFromInterval(5, 10)
      setPercentage(prevState => prevState + randomNumber)
    }
  }

  if (isLoading) {
    loadingInterval = setInterval(increasePercentage, 300)
  }

  useEffect(() => {
    if (!isLoading) {
      setPercentage(0)
      clearInterval(loadingInterval)
    }
  }, [isLoading])

  useEffect(() => {
    return () => {
      loadingInterval && clearInterval(loadingInterval)
    }
  })

  return (
    <div className="Loader AppFrame-content">
      {isLoading && (
        <div className="Loader-filler" style={{ width: `${percentage}%` }} />
      )}
    </div>
  )
}

export default Loader
