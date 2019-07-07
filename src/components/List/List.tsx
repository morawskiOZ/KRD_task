import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import { Actions } from "../../globalState/actions"
import useAxios from "../../hooks/useAxios"
import "./List.scss"

const List: React.FC = () => {
  const {
    state: { isLoading, searchData, topDebtor },
    dispatch
  } = useContext(AppContext)

  const { error, loading, data } = useAxios(
    {
      url: "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts",
      method: "GET"
    },
    null,
    dispatch,
    Actions.SAVE_TOP_DEBTOR_DATA
  )
  return (
    <div className="List AppFrame-content">
      <span className="List-name">Dłużnik</span>
      <span className="List-NIP">NIP</span>
      <span className="List-Value">Kwota zadłużenia</span>
    </div>
  )
}

export default List
