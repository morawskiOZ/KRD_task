import React, { useMemo, useReducer } from "react"
import { reducer } from "../globalState/reducer"

const initialState: { isLoading?: boolean; searchData?: any } = {
  isLoading: false
}

const AppContext = React.createContext({
  state: initialState,
  dispatch: undefined
})

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
