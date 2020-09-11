import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Product } from '../model/list'
import { AddProduct, GetSelectedProduct, UpdateProduct, SetErrorObj, SetSuccessObj } from '../+state/add-product.action';
import { AddProductService } from '../add-product.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export class AddProductStateModel {
    addProduct: Product[];
    selectedProduct: any;
    errorObj: any;
    successObj: any;
}

@State<AddProductStateModel>({
    name: 'addProduct',
    defaults: {
        addProduct: [],
        selectedProduct: null,
        errorObj: null,
        successObj: null
    }
})
@Injectable()
export class AddProductState {

    constructor(private addProductService: AddProductService, private router: Router, private store: Store) {
    }

    /**
    * @param  {AddProductStateModel} 
    * return add product
    */
    @Selector()
    static getProductList(state: AddProductStateModel) {
        return state.addProduct;
    }
    /**
     * @param  {AddProductStateModel} 
     * return selected product
     */
    @Selector()
    static getSelectedProduct(state: AddProductStateModel) {
        return state.selectedProduct;
    }
    /**
     * @param  {AddProductStateModel} 
     * return error object
     */
    @Selector()
    static getErrorObj(state: AddProductStateModel) {
        return state.errorObj;
    }
    /**
     * @param  {AddProductStateModel} 
     * return success object
     */
    @Selector()
    static getSuccessObj(state: AddProductStateModel) {
        return state.successObj;
    }


    /**
    * AddProduct
    * add product list in state
    */
    @Action(AddProduct)
    addProduct({ getState, patchState, setState }: StateContext<AddProductStateModel>, { payload }: AddProduct) {
        return this.addProductService.addProduct(payload).pipe(
            tap((result: any) => {
                const state = getState();
                patchState({
                    addProduct: [...state.addProduct, result]
                });
                this.router.navigate(['home']);
                this.store.dispatch(new SetSuccessObj('Product added successfully'))
            }),
            catchError((err: any) => {
                return this.store.dispatch(new SetErrorObj(err))
            })
        );
    }
    /**
     * action UpdateProduct
     * update product details
     */
    @Action(UpdateProduct)
    updateProduct({ }: StateContext<AddProductStateModel>, { payload, id }: UpdateProduct) {
        return this.addProductService.updateProduct(payload, id).pipe(tap(() => {
            this.router.navigate(['home']);
            this.store.dispatch(new SetSuccessObj('Product updated successfully'))
        }), catchError((err: any) => {
            return this.store.dispatch(new SetErrorObj(err))
        })
        );
    }

    /**
     * action GetSelectedProduct
     * Selected product details
     */
    @Action(GetSelectedProduct)
    getSelectedProductId({ getState, setState }: StateContext<AddProductStateModel>, { id }: GetSelectedProduct) {
        return this.addProductService.getProductDetails(id).pipe(tap((result: any) => {
            const state = getState();
            setState({
                ...state,
                selectedProduct: result.data
            });
        }), catchError((err: any) => {
            return this.store.dispatch(new SetErrorObj(err))
        })
        );
    }
    /**
   * @param  {} actions.ValidateCodeTokenActivationCodeFail
   */
    @Action(SetErrorObj)
    setErrorObj({ getState, setState }: StateContext<AddProductStateModel>, { err }) {
        const state = getState();
        let propValue = '';
        err = err?.error?.data;
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
    setSuccessObj({ getState, setState }: StateContext<AddProductStateModel>, { success }) {
        const state = getState();
        setState({
            ...state,
            successObj: success
        });
    }
}
