import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'; // Import JwtHelperService

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  getLoggedinUserProfile() {
    const url = 'https://iti-final.vercel.app/user/get';
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.get(url, {headers: headers});
  }

  updateLoggedinUserImage(newImage: File) {
    const url = 'https://iti-final.vercel.app/user/profileImage';
    let formDate = new FormData();
    formDate.append('image', newImage);
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, formDate, {headers: headers});
  }

  updateLoggedinUser(newUser: any) {
    const url = 'https://iti-final.vercel.app/user/update';
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, newUser, {headers: headers});
  }

  resetPassword(body: any) {
    const url = `https://iti-final.vercel.app/user/resetPassword/${this.userId}`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token!);
    return this.http.put(url, body, {headers: headers});
  }

  login(email: string, password: string) {
    const url = 'https://iti-final.vercel.app/user/login';
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(url, body);
  }

  registerUser(userDetails: any) {
    const url = 'https://iti-final.vercel.app/user/register';
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
