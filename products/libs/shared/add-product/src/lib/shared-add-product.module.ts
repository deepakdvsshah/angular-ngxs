import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AddProductState } from './+state/add-product.state';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddProductComponent }
    ]), NgxsModule.forFeature([AddProductState]),
  ],
  declarations: [AddProductComponent],
})
export class SharedAddProductModule { }
