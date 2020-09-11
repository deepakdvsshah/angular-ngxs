import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) {
  }
  /**
   * @param  {string} uuid
   * return product details
   */
  getProductDetails(uuid: string): Observable<any> {
    return this.http.get(`https://comlyn.com/rnd/api/product/${uuid}`);
  }
  /**
   * @param  {Product} payload
   * @returns Observable
   */
  addProduct(payload: Product): Observable<Product> {
    return this.http.post<Product>('https://comlyn.com/rnd/api/product', payload);
  }
  /**
   * @param  {Product} payload
   * @param  {string} uuid
   * @returns Observable
   */
  updateProduct(payload: Product, uuid: string): Observable<Product> {
    return this.http.patch<Product>(`https://comlyn.com/rnd/api/product/${uuid}`, payload);
  }
}
