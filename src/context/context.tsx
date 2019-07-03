import React, { useContext, useReducer } from "react"

let reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true }
    case "FINISH_LOADING":
      return { ...state, isLoading: false }
    default:
      return
  }
}

const initialState = { isLoading: false }
const LoadingContext = React.createContext(initialState)

const LoadingProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LoadingContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default { LoadingContext, LoadingProvider }
