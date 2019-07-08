export interface GlobalState {
  isLoading?: boolean
  searchData?: Debt[]
  topDebtor?: Debt[]
  caseCount?: number
}

export interface Debt {
  Address: string
  DocumentType: string
  Id: number
  NIP: string
  Name: string
  Number: string
  Price: number
  Value: number
}
