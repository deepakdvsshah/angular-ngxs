import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: ProductListViewComponent} 
    ]),
  ],
  declarations: [ProductListViewComponent],
})
export class SharedProductListModule {}
