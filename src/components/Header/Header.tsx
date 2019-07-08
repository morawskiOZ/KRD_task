import React, { useContext, ReactElement } from "react"
import { AppContext } from "../../context/context"
import Counter from "./Counter/Counter"
import "./Header.scss"
import SearchInput from "./SearchInput/SearchInput"

const Header = (): ReactElement => {
  useContext(AppContext)
  return (
    <div className="Header AppFrame-content">
      <SearchInput />
      <Counter />
    </div>
  )
}

export default Header
