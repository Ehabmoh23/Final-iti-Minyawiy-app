import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const url = 'https://trelloapp.onrender.com/login';
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(url, body);
  }

  registerUser(userDetails: any) {
    const url = 'https://trelloapp.onrender.com/register';
    return this.http.post(url, userDetails).pipe(
      tap((response: any) => {
        if (response && response.userDetails) {
          this.setUserProfile(response.userDetails);
        }
      })
    );
  }

  setUserProfile(userDetails: any) {
    localStorage.setItem('userProfile', JSON.stringify(userDetails));
    console.log('User profile data stored:', userDetails);
  }

  setToken(email: string, token: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
