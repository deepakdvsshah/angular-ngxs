import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProduct, GetSelectedProduct, AddProduct } from '../+state/add-product.action';
import { Store, Select } from '@ngxs/store';
import { AddProductState } from '../+state/add-product.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { Product } from '../model/list';
@Component({
  selector: 'products-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Select(AddProductState.getErrorObj) errorObj: Observable<Product[]>;
  @Select(AddProductState.getSuccessObj) successObj: Observable<Product[]>;
  addProduct: FormGroup;
  uuid: string;
  constructor(private router: Router, private store: Store, private route: ActivatedRoute, private formBuilder: FormBuilder,) {
    this.uuid = this.route.snapshot.paramMap.get('id');
    this.addProduct = this.formBuilder.group({
      currency: [null],
      delivery_cost: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      sku: [null, [Validators.required]],
      images: [null],
      price: [null, [Validators.required]],
      price_offer: [null, [Validators.required]],
      description: [null, [Validators.required]],
      title: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.uuid !== 'add') {
      this.store.dispatch(new GetSelectedProduct(this.uuid)).subscribe(() => {
        const selectedProduct = this.store.selectSnapshot(AddProductState.getSelectedProduct);
        this.addProduct.patchValue(selectedProduct);
      });
    }
  }
  /**
   * add product into list
   * @returns void
   */
  onSubmit(): void {
    this.addProduct.value["currency"] = 'GBD';
    this.addProduct.value["images"] = [];
    const products = {
      "currency": "GBP",
      "delivery_cost": this.addProduct.value["delivery_cost"],
      "description": this.addProduct.value["description"],
      "images": [],
      "price": this.addProduct.value["price"],
      "price_offer": this.addProduct.value["price_offer"],
      "stock": this.addProduct.value["stock"],
      "sku": this.addProduct.value["sku"],
      "title": this.addProduct.value["title"],
    }
    if (this.uuid === 'add') {
      this.store.dispatch(new AddProduct(products))
    } else {
      this.store.dispatch(new UpdateProduct(products, this.uuid))
    }
  }
  /**
   * cancel add list data
   * @returns void
   */
  cancel(): void {
    this.router.navigate(['home']);
  }
}

