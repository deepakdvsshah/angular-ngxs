import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Product} from './model/product-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListViewService {

  constructor(private http: HttpClient) {
  }
  /**
   * @returns Observable
   */
  fetchProducts():Observable<Product[]> {
      return this.http.get<Product[]>('https://comlyn.com/rnd/api/product');
  }
  /**
   * @param  {string} uuid
   * @returns Observable
   */
  deleteProduct(uuid: string):Observable<any> {
      return this.http.delete(`https://comlyn.com/rnd/api/product/${uuid}`);
  }
}
