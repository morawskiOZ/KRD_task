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
      <span className="ListItem-address">{Address}</span>
      <span className="ListItem-documentType">{DocumentType}</span>
      <span className="ListItem-price">{Price}</span>
      <span className="ListItem-number">{Number}</span>
    </>
  )

  return (
    <div className={`ListItem ${active ? "ListItem--active" : ""}`}>
      <span className="ListItem-name">{Name}</span>
      <span className="ListItem-NIP">{NIP}</span>
      <span className="ListItem-value">{Value}</span>
      <span className="ListItem-button">{active ? "Mniej" : "Więcej"}</span>
      {active && activeItemElements}
    </div>
  )
}

export default ListItem
