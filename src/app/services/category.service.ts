import { HttpClient } from '@angular/common/http';
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
}
