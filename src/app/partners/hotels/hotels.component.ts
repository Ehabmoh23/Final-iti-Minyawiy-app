import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hotels } from 'src/app/interfaces/hotels';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  hotels: Hotels[] = [];
  loading: boolean = false;

  constructor(private categoryService: CategoryService, private router:Router) {}

  ngOnInit(): void {
  this.loading = true;
    this.categoryService.getCategory('getallHotels').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      this.hotels = data.allHotels || [];
    });
  }
  errorHandler(event: any) {
    console.debug(event);
    event.target.src = '../../../assets/img.jpg';
  }

  star(id: string) {
    const token = localStorage.getItem('token');
    if (token) {
      this.categoryService.star(id, "hotel").subscribe((res) => {
        console.log('star res ', res);
      });
    } else {
      console.error('Token not found in local storage');
    }
  }
}
