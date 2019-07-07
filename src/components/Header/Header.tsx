import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import "./Header.scss"
import SearchInput from "./SearchInput/SearchInput"

const Header = () => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <div className="Header">
      <SearchInput />
    </div>
  )
}

export default Header
