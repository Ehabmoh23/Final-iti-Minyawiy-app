import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDetailsComponent } from './card-details/card-details.component';


@NgModule({
  declarations: [
    HotelsComponent,
    RestaurentsComponent,
    ActivitiesComponent,
    CarRentalComponent,
    HomeComponent,
    EventsComponent,
    CardDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
    ActivitiesComponent,
    HotelsComponent,
    RestaurentsComponent,
    CarRentalComponent,
    EventsComponent,
    CardDetailsComponent
  ]
})
export class PartnersModule {
}
