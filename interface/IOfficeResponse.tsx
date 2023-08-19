import { BaseResponse } from './BaseResponse'
import { IOffice } from './Office'

export interface IOfficeResponse extends BaseResponse {
    office: IOffice
    offices: IOffice[]
    total: number
}
