import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { RouterModule } from '@angular/router';
import { ProductListState } from './+state/product-list-view.state';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ProductListViewComponent }]),
    NgxsModule.forFeature([ProductListState]),
  ],
  declarations: [ProductListViewComponent],
})
export class SharedProductListModule { }
