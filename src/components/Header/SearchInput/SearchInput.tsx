import React, { ChangeEvent, useContext, useState } from "react"
import { AppContext } from "../../../context/context"
import { Actions } from "../../../globalState/actions"
import useAxios from "../../../hooks/useAxios"
import "./SearchInput.scss"

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<number | string>("")
  const [search, setSearch] = useState<number | string | null>(null)

  const { dispatch } = useContext(AppContext)

  useAxios(
    {
      url:
        "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts",
      method: "POST",
      data: { Number: query, Name: query, NIP: query }
    },
    search,
    dispatch,
    Actions.SAVE_SEARCH_DATA,
    query
  )

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setQuery(e.currentTarget.value)
  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (query && query.toString().length < 3) {
      dispatch({
        type: Actions.SET_ERROR,
        error: "Proszę wprowadź co najmniej 3 znaki."
      })
    } else {
      setSearch(query)
      dispatch({ type: Actions.SET_ERROR, error: null })
    }
  }
  return (
    <form className="SearchInput-form" onSubmit={handleOnSubmit}>
      <label className="SearchInput-label" htmlFor="searchInput">
        Podaj numer sprawy, nazwę lub NIP dłużnika
      </label>
      <div className="SearchInput-inputContainer">
        <input
          className="SearchInput-input"
          type="text"
          name="searchInput"
          value={query}
          onChange={handleOnChange}
        />
        <input className="SearchInput-submit" type="submit" value="Szukaj" />
      </div>
    </form>
  )
}

export default SearchInput
