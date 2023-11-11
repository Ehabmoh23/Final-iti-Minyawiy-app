import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import "./profile.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userData: any;
  imageFile: File | null = null; // Variable to store the selected image file

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  // Load user information from the token
  loadUserInfo(): void {
    const userInfo = this.authService.getUserInfoFromToken();

    if (userInfo) {
      // Do something with the user information
      console.log('User information from token:', userInfo);
      // For now, you can assign it to userData
      this.userData = userInfo;
    } else {
      console.error('Failed to retrieve user information from the token.');
      // Handle the case where user information couldn't be retrieved
    }
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

    // Remove the file input element from the DOM after usage
    document.body.removeChild(fileInput);
  }

  // Function to update profile image based on user choice
  updateProfileImage(): void {
    // Check if an image file is selected
    if (this.imageFile) {
      // If a file is selected, handle the file upload logic...
      // For now, we'll just log the file details to the console.
      console.log('File uploaded:', this.imageFile);

      // You can add additional logic here to handle the file upload
      // For example, you might want to upload the file to a server
      // and update the user's profile image URL in userData.
      // For now, let's update it with a local URL for demonstration purposes.
      this.userData.profileImage = URL.createObjectURL(this.imageFile);
    }

    // Save updated user data to local storage
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  // Function to update profile information
  updateProfile(): void {
    // Additional logic to update other profile information if needed...

    // Save updated user data to local storage
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
  // userData: any;
  // imageFile: File | null = null; // Variable to store the selected image file

  // constructor() {
  //   const storedUserData = localStorage.getItem('userData');
  //   if (storedUserData) {
  //     this.userData = JSON.parse(storedUserData);
  //   }
  // }

  // // Function to handle file selection
  // onFileSelected(event: any): void {
  //   this.imageFile = event.target.files[0];
  //   this.updateProfileImage();
  // }

  // // Function to open the file input when the button is clicked
  // openFileInput(): void {
  //   const fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.accept = 'image/*';
  //   fileInput.style.display = 'none';
  //   fileInput.addEventListener('change', (event) => this.onFileSelected(event));

  //   document.body.appendChild(fileInput);

  //   fileInput.click();

  //   // Remove the file input element from the DOM after usage
  //   document.body.removeChild(fileInput);
  // }

  // // Function to update profile image based on user choice
  // updateProfileImage(): void {
  //   // Check if an image file is selected
  //   if (this.imageFile) {
  //     // If a file is selected, handle the file upload logic...
  //     // For now, we'll just log the file details to the console.
  //     console.log('File uploaded:', this.imageFile);

  //     // You can add additional logic here to handle the file upload
  //     // For example, you might want to upload the file to a server
  //     // and update the user's profile image URL in userData.
  //     // For now, let's update it with a local URL for demonstration purposes.
  //     this.userData.profileImage = URL.createObjectURL(this.imageFile);
  //   }

  //   // Save updated user data to local storage
  //   localStorage.setItem('userData', JSON.stringify(this.userData));
  // }

  // // Function to update profile information
  // updateProfile(): void {
  //   // Additional logic to update other profile information if needed...

  //   // Save updated user data to local storage
  //   localStorage.setItem('userData', JSON.stringify(this.userData));
  // }
  }

