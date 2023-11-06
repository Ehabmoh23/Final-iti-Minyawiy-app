import { Component } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // loginForm : FormGroup;
  // constructor(private fb : FormBuilder ,  private authService: AuthService, private router: Router , private msgService: MessageService){
  //   this.loginForm = this.fb.group({
  //     email :['',[Validators.required , Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)]],
  //     password:['',[Validators.required , Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)]],
  //   })
  // }
  // get email() {
  //   return this.loginForm.controls['email'];
  // }
  // get password() { return this.loginForm.controls['password']; }

  // loginUser() {
  //   const { email, password } = this.loginForm.value;
  //   this.authService.getUserByEmail(email as string).subscribe(
  //     response => {
  //       if (response.length > 0 && response[0].password === password) {
  //         sessionStorage.setItem('email', email as string);
  //         this.router.navigate(['/home']);
  //       } else {
  //         this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
  //       }
  //     },
  //     error => {
  //       this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
  //     }

  //   )
  // }
}
