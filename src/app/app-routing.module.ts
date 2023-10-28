import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './partners/home/home.component';
import { HotelsComponent } from './partners/hotels/hotels.component';
import { RestaurentsComponent } from './partners/restaurents/restaurents.component';
import { CarRentalComponent } from './partners/car-rental/car-rental.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ActivitiesComponent } from './partners/activities/activities.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'hotels', component: HotelsComponent  },
  { path: 'restaurents', component: RestaurentsComponent  },
  { path: 'car-rental', component: CarRentalComponent  },
  { path: 'actvities', component: ActivitiesComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'profile', component: ProfileComponent  },
  { path: '**', component: NotfoundComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
