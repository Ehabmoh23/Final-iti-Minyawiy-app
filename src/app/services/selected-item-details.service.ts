import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemDetailsService {
  private apiUrl = 'https://itigradiuation.onrender.com';
  constructor(private http: HttpClient) {}

  getSelectedItemDetails(id: string , getCategory :string): Observable<any> {
    const url = `${this.apiUrl}/${getCategory}/${id}`;
    return this.http.get(url);
  }
  get token(): string | null {
    return localStorage.getItem('token');
  }
  putRating(rating: number , url:string , body:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.put(url, body , {headers: headers});
    }
}
