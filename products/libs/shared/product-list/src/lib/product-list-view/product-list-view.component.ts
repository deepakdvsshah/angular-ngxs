import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProducts, DeleteProduct } from '../+state/product-list-view.action';
import { Select, Store } from '@ngxs/store';
import { ProductListState } from '../+state/product-list-view.state';
import { Product } from '../model/product-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'products-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  outOfStockCount:number;
  @Select(ProductListState.getProductList) productList: Observable<Product[]>;
  @Select(ProductListState.getErrorObj) errorObj: Observable<Product[]>;
  @Select(ProductListState.getSuccessObj) successObj: Observable<Product[]>;
  constructor(private router: Router, private store: Store) {
    this.store.dispatch(new GetProducts()).subscribe(() => {
    const productList = this.store.selectSnapshot(ProductListState.getProductList);
    this.outOfStockCount = (productList.filter((a:Product) => a.stock <=0)).length;
    });
  }

  ngOnInit() {
  }

  action(id, action) {
    action === 'delete' ? this.store.dispatch(new DeleteProduct(id)) : this.router.navigate(['addProduct/' + id]);
  }
}

