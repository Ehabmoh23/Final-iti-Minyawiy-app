import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  apiError: string = '';
  form: FormGroup;
  types = ['male', 'female'];
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required , Validators.min(3),Validators.max(15)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      cPassword: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]),
      address : new FormControl(null , [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
       age: new FormControl(0, [Validators.required , Validators.min(18)]),
    });
  }
  register() {
    const body = this.form.getRawValue();

    this.authService.registerUser(body).subscribe(
      (res: any) => {
        console.log('register res => ', res);
        this.router.navigate(['/auth/login']);
      },
      (error: any) => {
        if (error.error && error.error.message) {
          this.apiError = error.error.message;
        } else {
          this.apiError = 'An error occurred while registering.';
        }
      }
    );
  }
  }
