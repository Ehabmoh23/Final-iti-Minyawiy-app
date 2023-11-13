import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  getLoggedinUserProfile() {
    const url = 'https://itigradiuation.onrender.com/user/get';
    const isTokenExpired = this.jwtHelper.isTokenExpired(this.token);
    console.log('Is token expired:', isTokenExpired);
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    console.log('Token:', this.token);

    return this.http.get(url, { headers: headers }).pipe(
      catchError((error) => this.handleRequestError(error))
    );
  }
  private handleRequestError(error: any): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        console.error('User not authenticated. Redirect to login page.');
        // this.router.navigate(['/auth/login']);
      } else if (error.status === 401) {
        // Assuming the server responds with a specific message for unauthenticated users
        const errorMessage = error.error && error.error.message ? error.error.message : 'Unknown error';
        console.error(`Authentication error: ${errorMessage}`);
        // Handle the specific error message for unauthenticated users
      }
    }
    return throwError(error);
  }
  updateLoggedinUserImage(newImage: File) {
    const url = 'https://itigradiuation.onrender.com/user/profileImage';
    let formDate = new FormData();
    formDate.append('image', newImage);
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, formDate, {headers: headers});
  }

  updateLoggedinUser(newUser: any) {
    const url = 'https://itigradiuation.onrender.com/user/update';
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, newUser, {headers: headers});
  }

  resetPassword(body: any) {
    const url = `https://itigradiuation.onrender.com/user/resetPassword/${this.userId}`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, body, {headers: headers});
  }

  login(email: string, password: string) {
    const url = 'https://itigradiuation.onrender.com/user/login';
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(url, body);
  }

  registerUser(userDetails: any) {
    const url = 'https://itigradiuation.onrender.com/user/register';
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
  get userId(): boolean {
    return JSON.parse(localStorage.getItem('userData')!)?._id;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  getUserInfoFromToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = this.jwtHelper.decodeToken(token);
        // Exclude password and cPassword from the returned user information
        const { password, cPassword, ...userInfo } = decodedToken;
        return userInfo;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['/auth/login']);
  }
}


///// https://iti-final.vercel.app
///// https://itigradiuation.onrender.com
