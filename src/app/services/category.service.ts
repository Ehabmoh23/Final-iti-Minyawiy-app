import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from '../interfaces/hotels';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }
  getCategory(category: string): Observable<any> {
    return this._httpClient.get(`https://itigradiuation.onrender.com/${category}`);
  }
  get token(): string | null {
    return localStorage.getItem('token');
  }
  star(id: string , get_category :string): Observable<any> {
    const url = `https://itigradiuation.onrender.com/add-${get_category}-id`;
    let headers = new HttpHeaders();
    const body = {
      id: id,
    };
    console.log(this.token)
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    console.log(headers)
    console.log(this._httpClient)
    return this._httpClient.post(url, body , {headers: headers});
    }
}
