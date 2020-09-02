export interface TotreeFnNoIdpType {
    (list: any[],
        condition: string[]): any[]
}
export interface TotreeFnHasIdpType {
    (list: any[]): any[]
}
export interface PidQueryIdType  {
    (newArr:any[],list: any[],condition:string[]): void
}
export interface IdQueryPidType  {
    (newArr:any[]): void
}