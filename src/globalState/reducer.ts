import { Actions } from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.START_LOADING:
      return { ...state, isLoading: true }
    case Actions.FINISH_LOADING:
      return { ...state, isLoading: false }
    case Actions.SAVE_SEARCH_DATA:
      return { ...state, searchData: action.data }
    case Actions.SAVE_COUNTER_DATA:
      return { ...state, caseCount: action.data }
    case Actions.SAVE_TOP_DEBTOR_DATA:
      return { ...state, topDebtor: action.data }
      case Actions.SET_ACTIVE_ITEM:
        return { ...state, activeItemId: action.id }
    default:
      return
  }
}
