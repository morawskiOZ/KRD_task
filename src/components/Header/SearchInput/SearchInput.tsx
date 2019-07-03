import React from "react"

const SearchInput = () => {
  return (
    <form>
      <label>
        Podaj numer sprawy, nazwę lub NIP dłużnika
        <input type="text" name="search_Input" />
      </label>
      <input type="submit" value="Szukaj" />
    </form>
  )
}

export default SearchInput
