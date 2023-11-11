import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/interfaces/cars';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  cars: Cars[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory('getallCar').subscribe((data: any) => {
      console.log('API Data:', data);
      this.cars = data.allCar || [];
    });
  }
}
