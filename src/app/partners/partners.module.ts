import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HotelsComponent,
    RestaurentsComponent,
    ActivitiesComponent,
    CarRentalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
     RouterModule
  ],
  exports:[
    HomeComponent,
    ActivitiesComponent,
    HotelsComponent,
    RestaurentsComponent,
    CarRentalComponent
  ]
})
export class PartnersModule { }
