import React, { ReactElement } from "react"
import Counter from "./Counter/Counter"
import "./Header.scss"
import SearchInput from "./SearchInput/SearchInput"

const Header = (): ReactElement => {
  return (
    <>
      <div className="Header-backGround" />
      <div className="Header AppFrame-content">
        <SearchInput />
        <Counter />
      </div>
    </>
  )
}

export default Header
