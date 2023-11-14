import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  loading = false;
  hotels: any[] = [];
  activties: any[] = [];
  restaurents: any[] = [];
  cars: any[] = [];
  events: any[] = [];

  constructor(private categoryService: CategoryService) {
    this.getHotels();
    this.getRestaurents();
    this.getEvents();
    this.getActivities();
    this.getCars();
  }

  getHotels() {
    this.loading = true;
    this.categoryService.getCategory('getallHotels').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      let res = data.allHotels as any[];
      res.forEach((x, i) => {
        if(i < 3) this.hotels.push(x);
      });

      console.log('hotels ', this.hotels);

    });
  }
  getCars() {
    this.loading = true;
    this.categoryService.getCategory('getallCar').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      let res = data.allCar as any[];
      res.forEach((x, i) => {
        if(i < 3) this.cars.push(x);
      });
      console.log('cars ', this.cars);

    });
  }
  getRestaurents() {
    this.loading = true;
    this.categoryService.getCategory('getallresturant').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      let res = data.allresturant as any[];
      res.forEach((x, i) => {
        if(i < 3) this.restaurents.push(x);
      });

      console.log('restaurents ', this.restaurents);

    });
  }
  getEvents() {
    this.loading = true;
    this.categoryService.getCategory('getallEvents').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      let res = data.allEvents as any[];
      res.forEach((x, i) => {
        if(i < 3) this.events.push(x);
      });

      console.log('events ', this.events);

    });
  }
  getActivities() {
    this.loading = true;
    this.categoryService.getCategory('getallvisitplace').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      let res = data.allplace as any[];
      res.forEach((x, i) => {
        if(i < 3) this.activties.push(x);
      });

      console.log('activties ', this.activties);

    });
  }
  errorHandler(event: any) {
    console.debug(event);
    event.target.src = '../../../assets/img.jpg';
  }
}
