import React, { useMemo, useReducer } from "react"
import { reducer } from "../globalState/reducer"
import { GlobalState } from "../globalState/types"

const initialState: GlobalState = {
  isLoading: false
}

const AppContext = React.createContext({
  state: initialState,
  dispatch: undefined
})

const AppContextProvider = props => {
  const [state, dispatch]: [any, any] = useReducer(
    reducer,
    initialState as GlobalState
  )
  const contextValue: {
    state: GlobalState
    dispatch: any
  } = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
