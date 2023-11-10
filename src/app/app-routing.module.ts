import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './partners/home/home.component';
import { HotelsComponent } from './partners/hotels/hotels.component';
import { RestaurentsComponent } from './partners/restaurents/restaurents.component';
import { CarRentalComponent } from './partners/car-rental/car-rental.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ActivitiesComponent } from './partners/activities/activities.component';
import { EventsComponent } from './partners/events/events.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurents', component: RestaurentsComponent},
  {path: 'car-rental', component: CarRentalComponent},
  {path: 'actvities', component: ActivitiesComponent},
  {path: 'events', component: EventsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
