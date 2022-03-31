export interface ItemizedBill<IdType = string> {
    _id: IdType
    organizationId: IdType
    stageId: string
    stageName: string
    authUserId: IdType
    start: number
    end: number
    duration: number
}