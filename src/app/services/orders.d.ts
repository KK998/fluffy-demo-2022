export interface OrderProduct {
    gtin: string
    quantity: number // int64
    serialNumberType: string // SELF_MADE | ?
    serialNumbers?: Array<string> // only if serialNumberType == SELF_MADE
    templateId: string
}

export interface OrderDetails {
    factoryId: number
    factoryName?: string
    factoryAddress?: string
    factoryCountry: string
    productionLineId: string
    productCode: string
    productDescription: string
    poNumber?: string
    expectedStartDate?: string
}

export interface Order {
    omsId: string
    products: Array<OrderProduct>
    orderDetails: OrderDetails
}