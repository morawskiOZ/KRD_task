import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import { Actions } from "../../globalState/actions"
import { Debt } from "../../globalState/types"
import useAxios from "../../hooks/useAxios"
import "./List.scss"
import ListItem from "./ListItem/ListItem"

const fakeData: Debt = {
  Address: "ul. Paderewskiego 13 50-312 Wrocław",
  DocumentType: "Faktura VAT",
  Id: 1,
  NIP: "1112223301",
  Name: "Marcin Szymczak (Test)",
  Number: "DI/KOSZT/P/138483",
  Price: 12300,
  Value: 10000
}

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
    <>
      <div className="List AppFrame-content">
        <div className="List-title">
          <span className="List-name">Dłużnik</span>
          <span className="List-NIP">NIP</span>
          <span className="List-value">Kwota zadłużenia</span>
        </div>
        <div className="Item-items">
          <ListItem data={fakeData} active={false} />
          <ListItem data={fakeData} active={true} />
          <ListItem data={fakeData} active={false} />
        </div>
      </div>
    </>
  )
}

export default List
