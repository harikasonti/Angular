import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';



@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {
  

  private baseURL= "http://localhost:8095/app/feedback";
  constructor(public httpClient : HttpClient) { }

  getFeedbackList(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`);
  }

  searchFeedback(searchid:number):Observable<Feedback[]>
  {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}/${searchid}`);
  }

  searchFeedbackOnProduct(searchid:number):Observable<Feedback[]>
  {
    return this.httpClient.get<Feedback[]>(`${this.baseURL}/product/${searchid}`);
  }
}
