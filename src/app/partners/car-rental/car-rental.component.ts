import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/interfaces/cars';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  cars: Cars[] = [];
  loading: boolean = false;

  constructor(private categoryService: CategoryService, public authService: AuthService) { }

  ngOnInit(): void {
  this.loading = true;
    this.categoryService.getCategory('getallCar').subscribe((data: any) => {
  this.loading = false;
      console.log('API Data:', data);
      this.cars = data.allCar || [];
    });
  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = "../../../assets/img.jpg";
 }
 star(id: string) {
  this.categoryService.star(id , "car").subscribe((res) => {
    console.log('star res ', res);
  });
}
}
