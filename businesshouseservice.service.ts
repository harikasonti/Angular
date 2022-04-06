import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Businesshouse } from './businesshouse';

@Injectable({
  providedIn: 'root'
})
export class BusinesshouseserviceService {
  
  private baseURL= "http://localhost:8095/app/business";

  constructor(private httpClient : HttpClient) { }

  getBusinessHouseList(): Observable<Businesshouse[]>{
    return this.httpClient.get<Businesshouse[]>(`${this.baseURL}`);
  }

  createbusinesshouse(Businesshouse: Businesshouse): Observable<Businesshouse>{
    return this.httpClient.post<Businesshouse>(`${this.baseURL}`, Businesshouse);
  }

  deleteBusinesshouse(businessId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${businessId}`);
  }


}
