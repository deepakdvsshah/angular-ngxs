export type Action = | AddProduct | UpdateProduct | GetSelectedProduct | SetErrorObj | SetSuccessObj

export enum AddProductActionType {
    ADD = '[Product] Add',
    UPDATE = '[Product] Update',
    GET_SELECTED_PRODUCT = '[Product] Get Selected Product',
    ERROR_OBJ='[Product] Error object',
    SUCCESS_OBJ='[Product] Success object'
}

export class AddProduct {
    static readonly type = AddProductActionType.ADD;
    constructor(public payload: any) {
    }
}

export class UpdateProduct {
    static readonly type = AddProductActionType.UPDATE;
    constructor(public payload: any, public id: string) {
    }
}

export class SetErrorObj {
    static readonly type = AddProductActionType.ERROR_OBJ;
    constructor(public err:any) {
    }
}

export class SetSuccessObj {
    static readonly type = AddProductActionType.SUCCESS_OBJ;
    constructor(public success:any) {
    }
}

export class GetSelectedProduct {
    static readonly type = AddProductActionType.GET_SELECTED_PRODUCT;
    constructor(public id: string) {
    }
}