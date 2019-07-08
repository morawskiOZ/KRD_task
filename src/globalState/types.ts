import { ListItemProp } from "../components/List/ListItem/ListItem";

export interface GlobalState {
  isLoading?: boolean
  searchData?: ListItemProp[]
  topDebtor?: ListItemProp[]
  caseCount?: number
}
