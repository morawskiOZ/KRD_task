import React from "react"
import { Debt } from "../../../globalState/types"
import "./ListItem.scss"

interface ListItemProps {
  data: Debt
  active: boolean
}

const ListItem = ({
  data: { Address, DocumentType, Id, NIP, Name, Number, Price, Value },
  active
}: ListItemProps) => {
  const activeItemElements = (
    <>
      <div className="ListItem-cell ListItem-address ListItem-cell--smallFont">
        <h6 className="ListItem-cell--heading">Adres</h6>
        {Address}
      </div>
      <div className="ListItem-documentType ListItem-cell--smallFont">
        <h6 className="ListItem-cell--heading">
          Rodzaj/typ dokuemntu stanowiący <br />
          podstawę dla wierzytelności
        </h6>
        {DocumentType}
      </div>
      <div className="ListItem-price ListItem-cell--smallFont">
        <h6 className="ListItem-cell--heading">Cena zadłużenia</h6>
        {Price}
      </div>
      <div className="ListItem-number ListItem-cell--smallFont">
        <h6 className="ListItem-cell--heading">Numer</h6>
        {Number}
      </div>
    </>
  )

  return (
    <div className={`ListItem ${active ? "ListItem--active" : ""}`}>
      <div className="ListItem-name">
        {active && <h6 className="ListItem-cell--heading">Dłużnik</h6>}
        {Name}
      </div>
      <div className="ListItem-NIP">
        {active && <h6 className="ListItem-cell--heading">NIP</h6>}
        {NIP}
      </div>
      <div className="ListItem-value">
        {active && <h6 className="ListItem-cell--heading">Kwota zadłużenia</h6>}
        {Value}
      </div>
      <div className="ListItem-button">{active ? "Mniej" : "Więcej"}</div>
      {active && activeItemElements}
    </div>
  )
}

export default ListItem
