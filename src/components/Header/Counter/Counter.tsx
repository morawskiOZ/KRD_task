import React, { useContext, ReactElement } from "react"
import { AppContext } from "../../../context/context"
import { Actions } from "../../../globalState/actions"
import useAxios from "../../../hooks/useAxios"
import "./Counter.scss"

const Counter = (): ReactElement => {
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
