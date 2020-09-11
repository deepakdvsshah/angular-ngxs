export type Action = GetProducts | DeleteProduct | SetErrorObj | SetSuccessObj;

export enum ProductListViewActionType {
    GET = '[Product] Get',
    DELETE = '[Product] Delete',
    ERROR_OBJ = '[Product] Error object',
    SUCCESS_OBJ = '[Product] Success object'
}
export class GetProducts {
    static readonly type = ProductListViewActionType.GET;
}

export class DeleteProduct {
    static readonly type = ProductListViewActionType.DELETE;
    constructor(public id: string) {
    }
}
export class SetSuccessObj {
    static readonly type = ProductListViewActionType.SUCCESS_OBJ;
    constructor(public success: any) {
    }
}

export class SetErrorObj {
    static readonly type = ProductListViewActionType.ERROR_OBJ;
    constructor(public err: any) {
    }
}
