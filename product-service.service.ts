import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseURL= "http://localhost:8095/app/product";
  constructor(private httpClient : HttpClient) { }

  
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  deleteProduct(productId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${productId}`);
  }

  createproduct(Product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.baseURL}`, Product);
  }
}
