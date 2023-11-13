import { HttpClient } from '@angular/common/http';
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
}
