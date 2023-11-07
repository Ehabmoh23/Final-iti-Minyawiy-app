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

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      age: new FormControl(0, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
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
