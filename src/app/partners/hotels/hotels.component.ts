import { Component } from '@angular/core';
import { Hotels } from 'src/app/interfaces/hotels';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels: Hotels[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory('getallHotels').subscribe((data: any) => {
      console.log('API Data:', data);
      this.hotels = data.allHotels || [];
    });
  }
}
