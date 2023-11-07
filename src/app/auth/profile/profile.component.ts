import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import "./profile.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  userProfile: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const userProfileData = localStorage.getItem('userProfile');
    console.log('User profile data retrieved from localStorage:', userProfileData);
    if (userProfileData) {
      this.userProfile = JSON.parse(userProfileData);
    } else {
      console.log('User profile data not found in localStorage');
    }
  }
}
