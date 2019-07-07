import React, { useContext } from "react"
import useAxios from "../../../hooks/useAxios"
import Axios from "axios"
import { METHODS } from "http"
import { ENGINE_METHOD_ECDSA } from "constants"
import { AppContext } from "../../../context/context"
import { Actions } from "../../../globalState/actions"
import "./Counter.scss"

const Counter = () => {
  const { state, dispatch } = useContext(AppContext)

  const { error, loading, data } = useAxios(
    {
      url:
        "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount",
      method: "GET"
    },
    null,
    dispatch,
    Actions.SAVE_COUNTER_DATA
  )

  return (
    <div className="Counter">
      <p className="Counter-title">Całkowita ilość spraw</p>
      <span className="Counter-number">
        {loading && "Loading..."}
        {data && data}
      </span>
    </div>
  )
}

export default Counter
