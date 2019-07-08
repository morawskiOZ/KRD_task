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
    state: { isLoading, searchData, topDebtor, activeItemId },
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

  const dataToShow: Debt[] | undefined = searchData || topDebtor

  if (isLoading) {
    return <p className="AppFrame-content">Loading...</p>
  }
  if (dataToShow && !dataToShow.length) {
    return (
      <p className="AppFrame-content">
        Nie znaleziono żadnych wyników spełniających kryteria.
      </p>
    )
  }
  return (
    <>
      <div className="List AppFrame-content">
        <div className="List-title">
          <span className="List-title--heading List-name">Dłużnik</span>
          <span className="List-title--heading List-NIP">NIP</span>
          <span className="List-title--heading List-value">
            Kwota zadłużenia
          </span>
        </div>
        <div className="List-items">
          {dataToShow &&
            dataToShow.map((elementData: Debt) => (
              <ListItem
                data={elementData}
                active={elementData.Id === activeItemId}
                key={elementData.Id}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default List
