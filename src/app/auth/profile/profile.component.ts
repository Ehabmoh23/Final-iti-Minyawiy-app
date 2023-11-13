import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import './profile.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  imageFile: File | null = null;
  form: FormGroup;
  restForm: FormGroup;
  apiError: string = '';
  editMode: boolean = false;
  resetPassMode: boolean = false;
  loading: boolean = false;

  constructor(private authService: AuthService , private categoryservice : CategoryService) {
    this.restForm = new FormGroup({
      currentPassword: new FormControl(null),
      newPassword: new FormControl(null),
    })
    this.form = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.min(3),
        Validators.max(15),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^01[0125][0-9]{8}$'),
      ]),
      address: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(18) , Validators.max(60)]),
    });
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  // Load user information from the token
  loadUserInfo(): void {
    this.authService.getLoggedinUserProfile().subscribe((res: any) => {
      this.userData = res.user;
      console.log('user profile', this.userData);
    });
  }

  // Function to handle file selection
  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
    this.updateProfileImage();
  }

  // Function to open the file input when the button is clicked
  openFileInput(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', (event) => this.onFileSelected(event));

    document.body.appendChild(fileInput);

    fileInput.click();

    document.body.removeChild(fileInput);
  }

  // Function to update profile image based on user choice
  updateProfileImage(): void {
    if (this.imageFile) {

      console.log('File uploaded:', this.imageFile);


      this.userData.image = URL.createObjectURL(this.imageFile);

    }

    // Save updated user data
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  // update profile information
  updateImage(): void {
    this.authService.updateLoggedinUserImage(this.imageFile!)
    .subscribe(res => {
      console.log('update image res ', res);
    })
  }

  updateProfile(): void {
    // update other profile information if needed...
    this.authService.updateLoggedinUser(this.form.getRawValue())
    .subscribe((res: any) => {
      console.log('update user res', res);
      // Save updated user data to local storage
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.userData = res.user;
      this.editMode = false;
    })

  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = "../../../assets/img.jpg";
 }

 resetPass() {
  this.authService.resetPassword(this.restForm.getRawValue())
  .subscribe((res: any) => {
    console.log('rest pass res', res);
    this.authService.logout();
  })
 }
 setFavourite(id:string , ){
  // this.categoryservice.star(id , )
 }
}
