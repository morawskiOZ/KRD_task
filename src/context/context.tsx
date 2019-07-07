import React, { useMemo, useReducer } from "react"
import { reducer } from "../globalState/reducer"

const initialState: { state: any; dispatch?: any; searchData?: {} } = {
  state: { isLoading: false }
}
const AppContext = React.createContext(initialState)

const AppContextProvider = props => {
  const [state, dispatch]: [any, any] = useReducer<any>(
    reducer,
    initialState as any
  )
  const contextValue: {
    state: { isLoading: boolean }
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
