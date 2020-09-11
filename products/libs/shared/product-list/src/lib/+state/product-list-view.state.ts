import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Product } from '../model/product-list'
import { DeleteProduct, GetProducts, SetSuccessObj, SetErrorObj } from '../+state/product-list-view.action';
import { ProductListViewService } from '../product-list-view.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class ProductStateModel {
    Products: Product[];
    errorObj: any;
    successObj: any;
}

@State<ProductStateModel>({
    name: 'Products',
    defaults: {
        Products: [],
        errorObj: null,
        successObj: null
    }
})
@Injectable()
export class ProductListState {

    constructor(private listViewService: ProductListViewService, private store: Store) {
    }

    @Selector()
    static getProductList(state: ProductStateModel) {
        return state.Products;
    }
    /**
       * @param  {ProductStateModel} 
       * return error object
       */
    @Selector()
    static getErrorObj(state: ProductStateModel) {
        return state.errorObj;
    }
    /**
     * @param  {ProductStateModel} 
     * return success object
     */
    @Selector()
    static getSuccessObj(state: ProductStateModel) {
        return state.successObj;
    }
    @Action(GetProducts)
    getProducts({ getState, setState }: StateContext<ProductStateModel>) {
        return this.listViewService.fetchProducts().pipe(tap((result: any) => {
            const state = getState();
            setState({
                ...state,
                Products: result.data,
            });
        }),
            catchError((err: any) => {
                return this.store.dispatch(new SetErrorObj(err))
            })
        );
    }

    @Action(DeleteProduct)
    deleteProduct({ getState, setState }: StateContext<ProductStateModel>, { id }: DeleteProduct) {
        return this.listViewService.deleteProduct(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.Products.filter(item => item.uuid !== id);
            setState({
                ...state,
                Products: filteredArray,
            });
            this.store.dispatch(new SetSuccessObj('Product deleted successfully'))
        }),
            catchError((err: any) => {
                return this.store.dispatch(new SetErrorObj(err))
            })
        );
    }
    /**
     * @param  {} actions.ValidateCodeTokenActivationCodeFail
     */
    @Action(SetErrorObj)
    setErrorObj({ getState, setState }: StateContext<ProductStateModel>, { err }) {
        const state = getState();
        let propValue = '';
        err = err?.error?.data || err?.error;
        for (const propName in err) {
            if (err.hasOwnProperty(propName)) {
                propValue = propName.toUpperCase() + ' ' + err[propName];
            }
        }
        setState({
            ...state,
            errorObj: propValue
        });
    }
    /**
   * @param  {} actions.ValidateCodeTokenActivationCodeFail
   */
    @Action(SetSuccessObj)
    setSuccessObj({ getState, setState }: StateContext<ProductStateModel>, { success }) {
        const state = getState();
        setState({
            ...state,
            successObj: success
        });
    }
}

