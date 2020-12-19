export interface TreeQueryPidType  {
    (treeData: any[],
        checkedKeys:string[] ): any[]
}
export interface TreeQueryOneNodeType {
    (treeData: any[],
        id:string ): any
}

export interface TreeQueryPidLineType {
    (treeData: any[],
        id:string,
        line?:string[]
        ): any[]
}

